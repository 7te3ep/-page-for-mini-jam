import {c, ctx} from "./canvas.js";
import { Tree } from "./tree.js";


class PineCone {

    constructor(launch) {
        this.launch = launch;
        this.width = 25;
        this.height = 25;
        this.x = (Math.random() * (c.width - 100 - this.width) + 1)
        this.y = -this.height;
        this.dy = 0.1
        this.gravity = 10
    }

    update() {
        this.dy++
        this.y += this.dy / this.gravity

    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}


export {PineCone};