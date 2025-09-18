  const field = document.getElementById('playField');
  const ctx = field.getContext('2d');
  const cellSize = 10; 
  var posX = (field.clientWidth / 2);
  var posY = (field.clientWidth / 2);
  let direction = null;
  ctx.fillStyle = '#007bff';
  ctx.fillRect(200, 200, 10, 10);

  function moveSnake(direction){

  // ctx.clearRect(cellSize, cellSize, posX, posY);
  
  if(direction === "up"){
    posY -= 10;
    ctx.fillRect(posX, posY, 10, 10);
    ctx.clearRect(posX, (posY + 10), cellSize, cellSize)
  };

  if(direction === "down"){
    posY += 10;
    ctx.fillRect(posX, posY, 10, 10);
    ctx.clearRect(posX, (posY - 10), cellSize, cellSize)
  };

  if(direction === "left"){
   
    posX -= 10;
    ctx.fillRect(posX, posY, 10, 10);
    ctx.clearRect((posX + 10), posY, cellSize, cellSize)
  };

  if(direction === "right"){
    posX += 10;
    ctx.fillRect(posX, posY, 10, 10);
    ctx.clearRect((posX - 10), posY, cellSize, cellSize)
  };

  

  console.log(posX + "-" + posY)
  };

  document.addEventListener("keypress", function(event) {

    if (event.key === "w") { direction = "up"; }
    if (event.key === "s") { direction = "down"; }
    if (event.key === "a") { direction = "left"; }
    if (event.key === "d") { direction = "right"; }

  });

  setInterval(() => 
    moveSnake(direction), 200);