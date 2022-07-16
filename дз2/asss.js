const block = document.querySelector(".block")

let posX = 0;
let posY = 0;

function move() {
  if(posX < 340 && posY === 0) {
    posX += 16;
    block.style.left = `${posX}px`;
    setTimeout(() => {
      move();
    }, 200);
  }  else if (posX >= 340 && posY < 340 ) {
    posY += 16;
    block.style.top = `${posY}px`;
    setTimeout(() => {
      move();
    }, 150);
  }  else if (posX > 0 && posY >= 340) {
    posX -= 16;
    block.style.left = `${posX}px`;
    setTimeout(() => {
      move();
    }, 100)
  } else if (posX === 0 && posY > 0) {
    posY -= 16;
    block.style.top = `${posY}px`;
    setTimeout(() => {
      move();
    }, 50)
  }
}
move()

let num = 0;

function interval(){
  num++;
  console.log( num + " hours" + " later");
  if(num >= 30) {
  clearInterval(ctop);
  }}

  ctop = setInterval(interval,1000);