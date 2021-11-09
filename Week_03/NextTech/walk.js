// No need to change the following code
// The area object defines the div in which the balls will be created
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// No need to change the following code
// The initialize function creates the area div on the Html page
function initialize() {
  area.element.style.width = area.width + 'px';
  area.element.style.height = area.height + 'px';
  document.body.appendChild(area.element);
}

// No need to change the following code
// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}

// No need to change the following code
// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
  }
}

// TODO: implement the create function
function create(color, dx, dy) {
  const newBall = Object.create(this);
  // TODO: Set newBall properties: dx, dy, width, height
  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 1;
  newBall.height = 1;

  // TODO: set the newBall.element property and initialize it to a Html element "div"
  newBall.element = document.createElement('div');
  // TODO: set the backgroundColor, width and height style properties for newBall.element
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = 25 + 'px';
  newBall.element.style.height = 25 + 'px';
  // This line set the CSS class for newBall.element. No need to change this line
  newBall.element.className += ' ball';

  // TODO: set the width and height of newBall based on newBall.element
  // Hint: use the Javascript parseInt() function to convert a string value to integer
  newBall.width = parseInt(newBall.element.style.width);
  newBall.height = parseInt(newBall.element.style.height);
  // TODO: use the Javascript appendChild() function to add newBall.element to the area element
  document.body.appendChild(newBall.element);
  return newBall;
}

// TODO: implement the update function
function update(ball, x, y) {
  // TODO: use the moveTo() function to move the ball
  
  moveTo(ball, ball.dx, ball.dy);
  // TODO: use the Javascript setTimeout() method to call changeDirectionIfNecessary() and update() every 16ms
  setTimeout(function() {changeDirectionIfNecessary(ball, x, y); update(ball, x, y)}, 16);
}

// Uncomment these lines for step 1 of the activity
// This is expected to create 3 balls within the area div

 initialize();
 const ball1 = create('blue', 4, 3);
 const ball2 = create('red', 1, 5);
 const ball3 = create('green', 2, 2);
 moveTo(ball1, 1, 1);
 moveTo(ball2, 10, 10);
 moveTo(ball3, 20, 20);

// Uncomment these lines for step 2 of the activity
// This is expected to make the 3 balls move around the area div

 update(ball1, 70, 0);
 update(ball2, 20, 200);
 update(ball3, 300, 330);

// Do not change code past this point
if (typeof module !== 'undefined') {
  module.exports = { update, create, changeDirectionIfNecessary, moveTo, area };
}
