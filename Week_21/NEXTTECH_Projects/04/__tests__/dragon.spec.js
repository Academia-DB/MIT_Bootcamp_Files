var Dragon = require("../dragon");

describe("exists?", () => {
  test("dragon should be a function", () => {
    //checks that the dragon class is a function
    //setup a new dragon object
    //check to see that the dragon object exists, using an assertion
    const dragon1 = new Dragon("Smaug");
    expect(dragon1.name).toEqual("Smaug");
  });
});

describe("attributes", () => {
  test("it should be red by default", () => {
    //write a test to check if the default color is red
    //set up the dragon object
    //isolate the color attribute in a variable
    /*write what you expect the name variable to be 
    in the form of an assertion*/
    const dragon1 = new Dragon("Smaug");
    let col = dragon1.color;
    expect(col).toEqual("Red");
  });

  test("it can change color to golden", () => {
    //write a test to check if you can change the dragon's color
    const dragon1 = new Dragon("Smaug");
    dragon1.color = "Gold";
    let col = dragon1.color;
    expect(col).toEqual("Gold");
  });
});

describe("sayings", () => {
  test("it should get angry when you wake it up", () => {
    /*write a test to check the return value of this function is
  what you'd expect*/
    //set up a dragon
    /*invoke the function and check to see if the return 
    value is what you expect using assertions*/
    const dragon1 = new Dragon("Smaug");
    console.log(dragon1.wakeUp());
    expect(dragon1.wakeUp()).toBe("WHO DARES DISTURB MY SLUMBER?");
  });

  test("it should be happy when you leave", () => {
    /*similar to the above, write a test to check if the return value of this 
    function is what you expect*/
    const dragon1 = new Dragon("Smaug");
    expect(dragon1.threaten()).toEqual("Go now, and tell the others to leave me in peace! Else you shall regret the day you first drew breath!");
  });
});
