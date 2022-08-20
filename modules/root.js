import {c, ctx} from "./canvas.js";
import { Tree } from "./tree.js";


class Root {

    constructor(launch,player) {
        this.launch = launch;
        this.width = 25;
        this.height = 25;
        this.x = player.x
        this.y = c.height -100-this.height; 
        this.rootTime = 0
    }

    update() {

    }

    draw() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}


export {Root};