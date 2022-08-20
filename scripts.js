//scripts.js
//Main script for the page

let canva = document.getElementById('canvas')

import {c, ctx} from "./modules/canvas.js";
import {Environment} from "./modules/environment.js";
import { } from "./modules/game.js";
import {Player} from "./modules/player.js";
import {Tree} from "./modules/tree.js";
import {PineCone} from "./modules/pinecone.js";
import {Root} from "./modules/root.js";
import {Storage} from "./modules/storage.js";

//animation loop

let gameFrame = 1

let player = new Player
const tree = new Tree
const environment = new Environment
const storage = new Storage

let pineConeArray = []
let rootArray = []

function handlePineCone() {
    if ((gameFrame % 40) == 0) {
        pineConeArray.push(new PineCone())
    }
    for (let i = 0; i<pineConeArray.length; i++) {
        pineConeArray[i].update()
        pineConeArray[i].draw()

        if (pineConeArray[i].y >c.height - environment.height) {
            pineConeArray.splice(i, 1)
            i--;
        }
    }
}
let randomGenRoot = 500

function handleRoot() {
    if ((gameFrame % randomGenRoot ) == 0) {
        console.log(randomGenRoot)
        rootArray.push(new Root('launch',player))
    }
    for (let i = 0; i<rootArray.length; i++) {
        rootArray[i].update()
        rootArray[i].draw()

        //root animation & comportement

        if (rootArray[i].rootTime== 50){
            rootArray[i].width = 50
            rootArray[i].height = 100
            if (rootArray[i].y != c.height-200){
                rootArray[i].y --
            }else {
                rootArray[i].rootTime ++
            }
        }
        else {
            rootArray[i].rootTime ++
        }
        if (rootArray[i].rootTime == 200){
            rootArray.splice(i,1)
            i --
        }
    }
}

function handlePlayer(){
    player.update(tree, storage)
    player.checkCollision(pineConeArray,rootArray)
    player.getWood(tree,gameFrame)
    player.depositeWood(storage,gameFrame)
    player.draw()
}


function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tree.update()
    tree.draw()
    storage.draw()
    storage.update()
    handlePineCone()
    handlePlayer()
    handleRoot()
    environment.update()
    environment.draw()
    gameFrame ++
    if (player.alive == true){
    requestAnimationFrame(gameLoop)
    } else {
        player = ''
        menu()
    }
}

function menu(){
   canva.style.display = 'none'
   document.getElementById("title").style.visibility = 'visible'
   document.getElementById("playBtn").style.visibility = 'visible'
}
document.getElementById("playBtn").addEventListener("click", function(){
    rootArray = []
    pineConeArray = []
    player = new Player(environment.height, gameFrame, tree.width)
    canva.style.display = 'block'
    document.getElementById("playBtn").style.visibility = 'hidden'
    document.getElementById("title").style.visibility = 'hidden'
    gameLoop()});

menu()
