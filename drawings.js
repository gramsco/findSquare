var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mainHeight = 50;
var mainWidth = 50;
let mainX = (canvas.width - mainWidth) / 2;
let mainY = (canvas.height - mainHeight) / 2;

var rightPressed = false;
var leftPressed = false;
var topPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let score = 0 


function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        topPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    } else console.log("illegal move");
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        topPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function drawmain() {
    ctx.beginPath();
    let color = findcolor()
    ctx.rect(mainX, mainY, mainWidth, mainHeight);
    ctx.fillStyle = olor
    ctx.fill();
    ctx.closePath();
}

function drawTheRandom() {
    ctx.beginPath()
    ctx.rect(...toFind)
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.closePath()
}
function randomPoint() {
    return Math.floor(Math.random() * 500)
}

let defaultW = 50
let defaultH = 50

let toFind = randomRectangle()

function update() {
    let toFindX = document.getElementById('toFindX')
    let toFindY = document.getElementById('toFindY')

    let movingX = document.getElementById('movingX')
    let movingY = document.getElementById('movingY')

    let color = document.getElementById('color')

    let scoreDisplay = document.getElementById('score-display')

    toFindX.innerHTML = toFind[0]
    toFindY.innerHTML = toFind[1]

    movingX.innerHTML = mainX
    movingY.innerHTML = mainY

    color.innerHTML = findcolor()
    scoreDisplay.innerHTML = 50 - score

}




function randomRectangle() {
    return ([
        randomPoint(),
        randomPoint(),
        defaultW,
        defaultH
    ])
}

function findcolor() {
    var rectX = toFind[0]
    var rectY = toFind[1]
   
    let distY = Math.pow((rectY - mainY), 2)
    let distX = Math.pow((rectX - mainX), 2)
    let dist = Math.sqrt(distX+distY)
    let r = 255- Math.floor(Math.abs(dist))
    let g = 0
    let b = 0
    let a = 1
    return `rgba(${r},${g},${b},${a})`
}
    

function draw() {
    // console.log(canvas.width, mainX, mainWidth)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //to better understand
    if (mainX < toFind[0] + toFind[2] &&
        mainX + mainWidth > toFind[0] &&
        mainY < toFind[1] + toFind[3] &&
        mainY + mainHeight > toFind[1]) {
        defaultH--
        defaultW--
        if (defaultH === 0) {
            alert('You win!')
            window.location.reload()
        }
        toFind = randomRectangle()
        score ++
    }

    if (rightPressed) {
        if (mainX < (canvas.width - mainWidth)) mainX += 7;
    } else if (leftPressed) {
        if (mainX > 0) mainX -= 7;
    } else if (topPressed) {
        if (mainY > 0) mainY -= 7;
    } else if (downPressed) {
        if (mainY + mainHeight < canvas.height) mainY += 7
    }

    update();
    drawTheRandom()
    drawmain();



}
setInterval(draw, 10);