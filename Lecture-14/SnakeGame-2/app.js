const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


const cs = 67;
const H = 735;
const W = 1200;
let food = null;
let score = 0;


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
        const headY = this.cells[this.cells.length - 1].y;
        
        // Food and Snake head is colliding
        if (headX === food.x && headY === food.y) {
            food = getRandomFood();
            score++;
        } else {
            // Removing the first cell
            this.cells.shift();
        }

    
        let nextX, nextY;
        // Getting the coordinates for next cell to pushed 
       

        if (this.direction == 'up') {
            nextX = headX;
            nextY = headY - 1;

            if (nextY * cs < 0) {
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText('Game Over', 50, 100);
            }
            
        }
        else if (this.direction == 'down') {
            nextX = headX;
            nextY = headY + 1;

            if (nextY * cs >= H) {
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText('Game Over', 50, 100);
            }
        }
        else if (this.direction == 'left') {
            nextX = headX - 1;
            nextY = headY;

            if (nextX * cs < 0) {
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText('Game Over', 50, 100);
            }

        }
        else {
            nextX = headX + 1;
            nextY = headY;

            if (nextX * cs >= W) {
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText('Game Over', 50, 100);
            }

        }



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

    food = getRandomFood();

    pen.fillText(`Score ${score}`, 50, 50);

    function keypressed(e) {
        // console.log(e);
        // console.log("KeyPressed");

        if (e.key === 'ArrowDown') {
            snake.direction = 'down';
        }
        else if (e.key === 'ArrowUp') {
            snake.direction = 'up';
        }
        else if (e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else {
            snake.direction = 'right';
        }

        console.log(snake.direction);
    }


    document.addEventListener('keydown', keypressed);
}


// draw

function draw() {
    pen.clearRect(0, 0, W, H);
    pen.font = '40px sans-serif';
    pen.fillText(`Score ${score}`, 50, 50);
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillStyle = 'yellow';
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

function getRandomFood() {
    
    const foodX = Math.floor(Math.random() * (W - cs)/cs);
    const foodY = Math.floor(Math.random() * (H - cs)/cs);


    const food = {
        x: foodX,
        y: foodY
    }

    return food;
}


// Calling the init function and initilising the game
init();



const id = setInterval(gameLoop, 100);






