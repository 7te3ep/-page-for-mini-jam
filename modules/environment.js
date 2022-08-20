//Environment.js

import {c, ctx} from "./canvas.js";

//Environment.js
class Environment {
    constructor(){
        this.width = c.width
        this.height = 100
        this.x = 0
        this.y = c.height - this.height
        this.dx = 0
        this.dy = 0
    }
    update(){

    }
    draw(){
        ctx.fillStyle = 'grey'
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
export {Environment};
