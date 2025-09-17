const field = document.getElementById('playField');
const ctx = field.getContext('2d');
ctx.fillStyle = '#007bff';
ctx.fillRect(200, 200, 10, 10); 
var posX = 200;
var posY = 200;
let direction = null;

function moveSnake(direction){
ctx.clearRect(10, 10, posX, posY);

if(direction === null){

} else{
if(direction === "up"){
  posY -= 10;
  ctx.fillRect(posX, posY, 10, 10);
};

if(direction === "down"){
  posY += 10;
  ctx.fillRect(posX, posY, 10, 10);
};

if(direction === "left"){
  posX -= 10;
  ctx.fillRect(posX, posY, 10, 10);
};

if(direction === "right"){
  posX += 10;
  ctx.fillRect(posX, posY, 10, 10);
};
}};

document.addEventListener("keypress", function(event) {

  if (event.key === "w") { direction = "up"; }
  if (event.key === "s") { direction = "down"; }
  if (event.key === "a") { direction = "left"; }
  if (event.key === "d") { direction = "right"; }

});

setInterval(() => moveSnake(direction), 200);
