const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')

var initialX, initialY

var score = 0

initialX = Math.floor(Math.random() * 200)
initialY = Math.floor(Math.random() * 200)

class Snake {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.xspeed =5
        this.yspeed =0
        this.lenght =0
    }

    update() {
        this.x = this.x + this.xspeed
        this.y = this.y + this.yspeed
    }

    show(){
        createRect(this.x,this.y, 20, 20, "white") 
        //console.log(this.x , canvas.width,this.xspeed)

    }

    dir(x,y){
        this.xspeed=x
        this.yspeed=y
    }

    hitWall(){
        if (this.x >= canvas.width){
            
            this.x= 1
        }
        if (this.x <= 0){
            this.x=canvas.width
        }
        if (this.y >= canvas.height){
            
            this.y= 1
        }
        if (this.x <= 0){
            this.y=canvas.height
        }
    }
  
}

class Apple {
    
    constructor(x,y,dim){
        this.x=x
        this.y=y
        this.dim=20
    }

    show(){
        createRect(this.x,this.y, this.dim, this.dim, "red") 
       
    }

    eat(){
        var a = snake.x - this.x;
        var b = snake.y - this.y;
        var distance=Math.sqrt( a*a + b*b )
        
        if (distance<5){
            this.x=Math.floor(Math.random() * canvas.width-10)
            this.y=Math.floor(Math.random() * canvas.height-10)
            score ++
        }
    }
}

const apple  = new Apple(initialX,initialY)
const snake  = new Snake(100,100)



window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/50) // 15 valore di refresh 
}

function show() {
    update()
    draw()

    snake.update()
    snake.show()
    snake.hitWall()
    apple.show()
    apple.eat()
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
    canvasContext.fillText("Score: " + score,canvas.width - 120, 18)

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

function createRect(x,y,width, height,color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}


