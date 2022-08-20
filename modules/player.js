import {c, ctx} from "./canvas.js";

//Player.js
let dPressed = ''
let qPressed = ''
let spacePressed = ''
let canvasPosition = canvas.getBoundingClientRect()

/* CONTROL */
window.addEventListener("keydown", function(event) {
    switch(event.key){
        case " ":
            spacePressed = true
            break
        case "q":
            qPressed = true
            break
        case "d":
            dPressed = true
            break
    }
});

window.addEventListener("keyup", function(event) {
    switch(event.key){
        case " ":
            spacePressed = false
            break
        case "q":
            qPressed = false
            break
        case "d":
            dPressed = false
            break
    }
});
/*                                                      */


class Player {
    constructor(heightFloor){
        this.screenHeight = c.height
        this.screenWidth = c.width
        this.heightFloor = heightFloor
        this.width = 40
        this.height = 64
        this.x = 10
        this.y = this.screenHeight - this.heightFloor
        this.dx = 0
        this.dy = 0
        this.gravity = 3
        this.friction = 0.5
        this.maxSpeed = 7
        this.woodCharge = 0
        this.action_range = 20
        this.alive = true
    }
    update(tree, storage, gameFrame){
        this.movement()

        this.deleteDecimal()

        this.gravityForce()

        this.borderScreenCollision()

        this.getWood(tree, gameFrame)

        this.depositeWood(storage, gameFrame)

        // pos update
        this.x += this.dx
        this.y += this.dy
    }

    borderScreenCollision() {
        // tree border
        if ((this.x + this.dx) + this.width > this.screenWidth - 105){
            this.dx = 0
            this.x = this.screenWidth - this.width -105

        // storage border
        } else if ((this.x+this.dx)<0+5){
            this.dx = 0
            this.x = 0 +5
        }
    }

    gravityForce() {
        if ( this.y+this.dy >= this.screenHeight - this.heightFloor - this.height){
            this.y = this.screenHeight - this.heightFloor - this.height
            this.dy = 0
        }else {
            this.dy += 1
        }
    }

    deleteDecimal() {
        if (this.dx>0){this.dx = Math.floor(this.dx)}
        else{this.dx = Math.ceil(this.dx)}

        if (this.dy>0){this.dy = Math.floor(this.dy)}
        else{this.dy = Math.ceil(this.dy)}
    }

    movement() {

        if(!dPressed && !qPressed || dPressed && qPressed){
            this.dx *= this.friction
        }
        else if (qPressed){
            this.dx --
        }
        else if (dPressed){
            this.dx ++
        }

        if(this.dx > this.maxSpeed){
            this.dx = this.maxSpeed
        } else if (this.dx < -this.maxSpeed) {
            this.dx= -this.maxSpeed
        }

        if (spacePressed && this.y == c.height - this.heightFloor - this.height){
            this.dy -= 17
        }
    }

    getWood(tree, gameFrame) {
        if (this.x > this.screenWidth - tree.width - this.width - this.action_range) {
            if (gameFrame % 60 == 0) {
                this.woodCharge ++;
            }
        }
    }

    depositeWood(storage, gameFrame) {
        if (this.x < storage.width) {
            if (gameFrame % 30 == 0) {
                if (this.woodCharge > 0) {
                    this.woodCharge --
                    storage.woodAmmount ++
                }
            }
        }
    }

    checkCollision(pineConeArray,rootArray) {
        for(let i=0; i<pineConeArray.length; i++){
            if (this.x<pineConeArray[i].x+pineConeArray[i].width && this.x+this.width >pineConeArray[i].x &&
                this.y<pineConeArray[i].y+pineConeArray[i].height &&this.y+this.height >pineConeArray[i].y) {
                    pineConeArray.splice(i, 1)
                    this.alive = false
            }
        }
        for(let i=0; i<rootArray.length; i++){
            if (this.x<rootArray[i].x+rootArray[i].width && this.x+this.width >rootArray[i].x &&
                this.y<rootArray[i].y+rootArray[i].height &&this.y+this.height >rootArray[i].y && rootArray[i].y <= c.height -150) {
                    rootArray.splice(i, 1)
                    this.alive = false
            }
        }
    }

    draw(){
        ctx.font = "bold 20px arial";
        ctx.fillStyle = "black";
        ctx.fillText(`${this.woodCharge}🪵`, this.x,this.y -15);
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
export {Player};
