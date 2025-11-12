const field = document.getElementById('playField');
const ctx = field.getContext('2d');
const cS = 10; //cellSize
// let randomX = (Math.random(1, field.clientWidth) * 200);
// let randomY = (Math.random(1, field.clientHeight) * 200);
// let appleX = roundToNearestTen(randomX);
// let appleY = roundToNearestTen(randomY);
var randomX;
var randomY;
var appleX;
var appleY;
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

// ORIGINAL PLACMENT OF CODE: document.addEventListener("keypress", function (event) {

//   if (event.key === "w") { direction = "up"; }
//   if (event.key === "s") { direction = "down"; }
//   if (event.key === "a") { direction = "left"; }
//   if (event.key === "d") { direction = "right"; }
//   if (event.key === "=") { console.log("playerPos= " + posX + "-" + posY) }
//   if (event.key === "=") { console.log("applePos= " + appleX + "-" + appleY) }
// });



//FOOD

function roundToNearestTen(number) {
  return Math.round(number / cS) * cS;
};



function appleGen() {
  
  console.log("appleGenCommenced");
    
    randomX = Math.random() * 200;
    randomY = Math.random() * 200;
    appleX = roundToNearestTen(randomX);
    appleY = roundToNearestTen(randomY);
    
    console.log("random xy= " + randomX + " " + randomY);
    console.log("random xy rounded= " + appleX + " " + appleY);
    
    ctx.drawImage(apple, appleX, appleY);

    // console.log("appleGen is triggering")
    // console.log(Math.random() + " random")


    document.addEventListener("keypress", function (event) {

  if (event.key === "w") { direction = "up"; }
  if (event.key === "s") { direction = "down"; }
  if (event.key === "a") { direction = "left"; }
  if (event.key === "d") { direction = "right"; }
  if (event.key === "=") { console.log("playerPos= " + "x." + posX + " - " + "y." + posY) }
  if (event.key === "=") { console.log("applePos= " + "x." +  appleX + " - " + "y." + appleY) }
});
};

apple.onload = () => {
appleGen();
};

//tick
setInterval(() => {

  // console.log("TICKING.playerPos= " + "x." + posX + " - " + "y." + posY);
  // console.log("TICKING.applePos= " + "x." +  appleX + " - " + "y." + appleY);

  moveSnake(direction);

  if ((appleX == posX && appleY == posY)) {
    console.log("apple eaten"); 
    appleGen();
    
  };

  // console.log("appleX and Y sum " + appleX + appleY);

  // if (posX > field.clientWidth) { console.log("lost") };
  // if (posX < 0) { console.log("lost") };
  // if (posY > field.clientHeight) { console.log("lost") };
  // if (posY < 0) { console.log("lost") };
}, 200);