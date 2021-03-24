const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'blue';


const cs = 67;
const H = 735;
const W = 1200;

let initial_x = 50;
let initial_y = 100;






// Initialise the Game
function init() {
    pen.fillRect(50, 100, 67, 67);
}


// draw

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillRect(initial_x, initial_y, 67, 67);
}

// update 

function update() {
    initial_x = initial_x + cs;
}


function gameLoop() {
    console.log("Game Loop Running");
    draw();
    update();
}

init();


const id = setInterval(gameLoop, 150);






