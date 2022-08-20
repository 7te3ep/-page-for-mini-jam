import {c, ctx} from "./canvas.js";

const assetPath = "../assets/images/backgrounds/";
const assetNames = [
    "backgroundCastles.png",
    "backgroundColorDesert.png",
    "backgroundColorFall.png",
    "backgroundColorForest.png",
    "backgroundColorGrass.png",
    "backgroundDesert.png",
    "backgroundEmpty.png",
    "backgroundForest.png",
];
const images = [];
for(let i = 0; i < assetNames.length; i++) {
    const img = new Image();
    img.addEventListener('load', () => {
      }, false);
    img.src = assetPath + assetNames[i];
    images.push(img); 
}

//Environment.js
class Background {
    constructor(){
        this.x = 0
        this.y = 0;
        this.width = c.width;
        this.height = c.height;
        this.index = 0;
    }
    increment(){
        this.index++;
    }
    update(index){
        this.index = index;
    }
    draw(){
        ctx.drawImage(images[this.index], 0, 0, c.width, c.height);
    }
}
export {Background};