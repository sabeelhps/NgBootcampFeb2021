const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


const cs = 67;
const H = 735;
const W = 1200;


const snake = {
    
    // Initial length of the snake
    init_len: 5,
    // Default direction of the snake
    direction: 'right',

    // cells array contain all the {x,y} for each cell
    cells: [],
    
    createSnake: function () {
        
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y:0
            })
        } 
    },

    drawSnake: function () {
        
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-2, cs-2);
        }
    
    },
    updateSnake: function () {
        

        // Getting the coordinates for current head of a snake
        const headX = this.cells[this.cells.length-1].x;
        const headY = this.cells[this.cells.length-1].y;


        let nextX, nextY;

        // Getting the coordinates for next cell to pushed 
        nextX = headX + 1;
        nextY = headY;


        // Removing the first cell
        this.cells.shift();


        // Adding the new cell at headX+1,headY+1
        this.cells.push({
            x: nextX,
            y: nextY
        })
    }
}



// Initialise the Game
function init() {
    snake.createSnake();
}


// draw

function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}

// update 

function update() {
    snake.updateSnake();
}



// Game Loop
function gameLoop() {
   
    draw();
    update();
}


// Calling the init function and initilising the game
init();



const id = setInterval(gameLoop, 150);






