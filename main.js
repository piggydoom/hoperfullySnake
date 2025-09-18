  const field = document.getElementById('playField');
  const ctx = field.getContext('2d');
  const cS = 10; //cellSize
  const randomX = Math.round(((Math.random(1, field.clientWidth)) * 200));
  const randomY = Math.round(((Math.random(1, field.clientHeight)) * 200));
  

  var posX = (field.clientWidth / 2);
  var posY = (field.clientWidth / 2);

  let direction = null;
  let apple = new Image();
  let snake = new Image();

  snake.src = 'assets/snake.png';
  apple.src = 'assets/apple.png';

  // ctx.fillStyle = '#007bff';
  // ctx.fillRect(200, 200, cS, cS);

    
    snake.src = 'assets/snake.png';
  
      snake.onload = () => {
        ctx.drawImage(snake, posX, posY); // Draws the image at (10,10) with width 150 and height 100
    };

  function moveSnake(direction){
 
  if(direction === "up"){
    posY -= cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect(posX, (posY + cS), cS, cS)
  };

  if(direction === "down"){
    posY += cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect(posX, (posY - cS), cS, cS)
  };

  if(direction === "left"){
    posX -= cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect((posX + cS), posY, cS, cS)
  };

  if(direction === "right"){
    posX += cS;
    ctx.drawImage(snake, posX, posY);
    ctx.clearRect((posX - cS), posY, cS, cS)
  };

  if(posX > field.clientWidth){ console.log("lost")};
  if(posX < 0){ console.log("lost")};
  if(posY > field.clientHeight){ console.log("lost")};
  if(posY < 0){ console.log("lost")};
  };

  document.addEventListener("keypress", function(event) {

    if (event.key === "w") { direction = "up"; }
    if (event.key === "s") { direction = "down"; }
    if (event.key === "a") { direction = "left"; }
    if (event.key === "d") { direction = "right"; }
    if (event.key === "=") {console.log(posX + "-" + posY)}
      
  });

  setInterval(() => 
    moveSnake(direction), 200);

  //FOOD
  appleGen();
  
  function appleGen(){
    // ctx.fillStyle = '#ff0000ff';
    // ctx.fillRect(randomX, randomY, cS, cS);  
      apple.onload = () => {
        ctx.drawImage(apple, randomX, randomY); // Draws the image at (10,10) with width 150 and height 100
    };

  };