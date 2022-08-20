import {c, ctx} from "./canvas.js";

// https://github.com/7te3ep/mini-jam-tree-game.git

class Tree {
    constructor() {
        this.width = 100;
        this.height = c.height + 200;

        // make the tree stick on the right
        this.x = c.width - this.width;
        this.y = 0;
    }

    update() {

    }

    draw(){
        ctx.fillStyle = 'rgb(77, 41, 0)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export {Tree};