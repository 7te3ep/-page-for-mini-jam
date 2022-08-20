import {c, ctx} from "./canvas.js";


class Storage {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = c.height-100 - this.height;
        this.woodAmmount = 0;
    }

    update() {

    }

    draw(){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = "bold 30px arial";
        ctx.fillStyle = "black";
        ctx.fillText(`${this.woodAmmount} wood`, this.x+5,this.y -10);
    }
}

export {Storage};