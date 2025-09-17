const field = document.getElementById('playField');
const ctx = field.getContext('2d');
ctx.fillStyle = '#007bff';   // fill color
ctx.fillRect(200, 200, 10, 10); // x, y, width, height

document.addEventListener("keypress", function(event) {
  if (event.key === "w") { 
    event.preventDefault(); 
    console.log("w");
    let direction = "up"
    console.log(direction);
  };
  
});