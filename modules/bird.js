import {c, ctx} from "./canvas.js";

class Bird {

    constructor(launch) {
        this.launch = launch;
        this.width = 35;
        this.height = 35;
        this.x = c.width -50-this.width/2
        this.y = c.height - 150;
        this.dx = 0.1
        this.birdTime = 0
    }

    update(bird) {
        if (this.birdTime == 100){
            bird.dx--
            bird.x += this.dx /8
        }else {
            this.birdTime ++
        }
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}


export {Bird};