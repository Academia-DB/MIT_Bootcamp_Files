import cdk = require("@aws-cdk/core");
import ec2 = require("@aws-cdk/aws-ec2");
import ecs = require("@aws-cdk/aws-ecs");
import elbv2 = require("@aws-cdk/aws-elasticloadbalancingv2");

export class Awsec3ExpressDockerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "helloVpc", { maxAzs: 2 });

    // Create an ECS cluster
    var cluster = new ecs.Cluster(this, "Cluster", { vpc });
    cluster.addCapacity("DefaultAutoScalingGroup", {
      instanceType: new ec2.InstanceType("t2.micro"),
      maxCapacity: 3,
    });

    // hello service
    const helloTaskDefinition = new ecs.Ec2TaskDefinition(
      this,
      "hello-task-definition",
      {}
    );

    const helloContainer = helloTaskDefinition.addContainer("hello", {
      image: ecs.ContainerImage.fromRegistry("jrwtango/c2express002"),
      memoryLimitMiB: 128,
    });

    helloContainer.addPortMappings({
      containerPort: 3000,
    });

    const helloService = new ecs.Ec2Service(this, "hello-service", {
      cluster: cluster,
      desiredCount: 3,
      taskDefinition: helloTaskDefinition,
    });
    // Internet facing load balancer for the frontend services

    const externalLB = new elbv2.ApplicationLoadBalancer(this, "external", {
      vpc: vpc,
      internetFacing: true,
    });

    const externalListener = externalLB.addListener("PublicListener", {
      port: 80,
      open: true,
    });

    externalListener.addTargets("greeter", {
      port: 80,
      targets: [helloService],
    });

    new cdk.CfnOutput(this, "ExternalDNS", {
      value: externalLB.loadBalancerDnsName,
    });
  }
}
