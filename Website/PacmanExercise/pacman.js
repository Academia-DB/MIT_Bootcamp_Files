var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

var time;
var anim;
var counter = 0;

// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    counter++;
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('space');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    newimg.id = "pac"+counter;
    newimg.dir = true;
    //
    // set position here 
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    //

    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        newimg
    }
}

function start() {
    pacMen.forEach((item) => {
        if(item.dir == undefined)
            item.dir = true;
    })
    animate();
    update();
}


function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    
    time = setTimeout(update, 20);
}

function checkCollisions(item) {
    if(item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0){
        item.velocity.x = -item.velocity.x;
        if(item.dir == false)
            item.dir = true;
        else
            item.dir = false;
    }
    if(item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0)
        item.velocity.y = -item.velocity.y;
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}

function reset() {
    clearTimeout(time);
    clearTimeout(anim);
    counter = 0;

    while(pacMen.length > 0) {
        let size = document.getElementById('space'); 
        // console.log(size.childElementCount);
        // console.log(pacMen.length);
        size.removeChild(size.firstChild);
        if(pacMen.length == 1) {
            pacMen.pop();
        }
        else {   
            pacMen.splice(0,1);
        }
    }
}

function animate() {
    for(let i = 1; i < counter+1; i++) {
        let pacmen = document.getElementById("pac"+i);
        //console.log(pacMen[i-1].dir);
        //console.log(pacmen.getAttribute('src'));
        if(pacMen[i-1].dir) {
            if(pacmen.getAttribute('src') == pacArray[1][0] || pacmen.getAttribute('src') == pacArray[1][1])
                pacmen.src = pacArray[0][0];
            if(pacmen.getAttribute('src') == pacArray[0][0])
                pacmen.src = pacArray[0][1];
            else if(pacmen.getAttribute('src') == pacArray[0][1])
                pacmen.src = pacArray[0][0];
        }
        else if(!pacMen[i-1].dir) {
            if(pacmen.getAttribute('src') == pacArray[0][0] || pacmen.getAttribute('src') == pacArray[0][1])
                pacmen.src = pacArray[1][0];
            if(pacmen.getAttribute('src') == pacArray[1][0])
                pacmen.src = pacArray[1][1];
            else if(pacmen.getAttribute('src') == pacArray[1][1])
                pacmen.src = pacArray[1][0];
        }
    }
    
    anim = setTimeout(animate, 50);
}