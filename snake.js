const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')



class Snake {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.xspeed =1
        this.yspeed =0
        this.lenght =0
    }

    update() {
        this.x = this.x + this.xspeed
        this.y = this.y + this.yspeed
    }

    show(){
        createRect(this.x,this.y, 20, 20, "white") 
       // console.log(this.x , this.y)
    }

    dir(x,y){
        this.xspeed=x
        this.yspeed=y
    }
  
}

const snake  = new Snake(100,100)

function createRect(x,y,width, height,color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}


window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/15) // 15 valore di refresh 
}

function show() {
    update()
    draw()

    snake.update()
    snake.show()
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height) // pulisci background

}

function draw() {
    //crea background nero 
    createRect(0,0, canvas.width, canvas.height, "black")
    createRect(0,0, canvas.width, canvas.height)
    //punteggio
    canvasContext.font = "20px Arial"
    canvasContext.fillStyle = "#00FF42"
    canvasContext.fillText("Score: " + snake.lenght,canvas.width - 120, 18)

}



window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.keyCode == 37 ) {   //x,y
            snake.dir(-1,0) 
            
        } else if (event.keyCode == 38 ) {
            snake.dir(0,-1) 

        } else if (event.keyCode == 39 ) {
            snake.dir(1,0)
           
        } else if (event.keyCode == 40 ) {
            snake.dir(0,1)
        }
    }, 1)
})



