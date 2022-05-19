var redis = require('redis');
var client = redis.createClient();

client.set('my_key', 'Hello World!');
client.get('my_key', function(err, reply) {
    console.log(reply);
});

client.mSet('header',0,'left',0,'article',0,'right',0,'footer',0);
client.mGet(['header','left','article','right','footer'],
    function(err, value) {
        console.log(value);
    }
);

client.quit();