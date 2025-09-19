const field = document.getElementById('playField');
const ctx = field.getContext('2d');
const cS = 10; //cellSize
let randomX = (Math.random(1, field.clientWidth) * 200);
let randomY = (Math.random(1, field.clientHeight) * 200);
let appleX = roundToNearestTen(randomX);
let appleY = roundToNearestTen(randomY);
// let appleX = null;
// let appleY = null;


var posX = (field.clientWidth / 2);
var posY = (field.clientWidth / 2);

let direction = null;
let apple = new Image();
let snake = new Image();


snake.src = 'assets/snake.png';
apple.src = 'assets/apple.png';

snake.src = 'assets/snake.png';

snake.onload = () => {
  ctx.drawImage(snake, posX, posY); // Draws the image at (10,10) with width 150 and height 100
};

//MOVE MECHANIC
function moveSnake(direction) {

  if (direction === "up") {
    posY -= cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect(posX, (posY + cS), cS, cS)
  };

  if (direction === "down") {
    posY += cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect(posX, (posY - cS), cS, cS)
  };

  if (direction === "left") {
    posX -= cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect((posX + cS), posY, cS, cS)
  };

  if (direction === "right") {
    posX += cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect((posX - cS), posY, cS, cS)
  };

 
};

document.addEventListener("keypress", function (event) {

  if (event.key === "w") { direction = "up"; }
  if (event.key === "s") { direction = "down"; }
  if (event.key === "a") { direction = "left"; }
  if (event.key === "d") { direction = "right"; }
  if (event.key === "=") { console.log("playerPos= " + posX + "-" + posY) }
  if (event.key === "=") { console.log("applePos= " + appleX + "-" + appleY) }
});



//FOOD

function roundToNearestTen(number) {
  return Math.round(number / cS) * cS;
};



function appleGen() {
  
  console.log("!!!");
    
    let randomX = Math.random() * 200;
    let randomY = Math.random() * 200;
    let appleX = roundToNearestTen(randomX);
    let appleY = roundToNearestTen(randomY);

    ctx.drawImage(apple, appleX, appleY);

    console.log("appleGen is triggering")

    console.log(randomX + " " + randomY);
    console.log(appleX + " " + appleY);
    // console.log(Math.random() + " random")
};

apple.onload = () => {
appleGen();
};

//tick
setInterval(() => {

  moveSnake(direction);

  if ((appleX == posX + 30 && appleY == posY + 20)) {
    console.log("apple eaten");
    appleGen();
    
  };

  console.log("appleX and Y sum " + appleX + appleY);

  // if (posX > field.clientWidth) { console.log("lost") };
  // if (posX < 0) { console.log("lost") };
  // if (posY > field.clientHeight) { console.log("lost") };
  // if (posY < 0) { console.log("lost") };
}, 200);