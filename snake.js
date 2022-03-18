const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/20) // here 15 is our fps value
}

function show() {
    update()
    draw()
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
   // snake.move()
   // eatApple()
   // checkHitWall()
}

function draw() {
    createRect(0,0,canvas.width, canvas.height, "black")
    createRect(0,0, canvas.width, canvas.height)

    //create snake
    

    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: " ,canvas.width - 120, 18)
    //createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(x,y,width, height,color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}