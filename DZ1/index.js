const idInput= document.querySelector(".idInput");
const spanResult = document.querySelector(".spanResult");
const btnClick = document.querySelector(".btnClick");

const idReg = /^1\d{13}|0\d{13}$/;

btnClick.addEventListener("click", () => {
    if(idReg.test(idInput.value)) {
    alert("ok");
    }  
    else {
      alert("not ok");
    }
  });

  //Второе Задание

  const block = document.querySelector(".blockk")

  let num = 0;
  const plus = function (moftBlock) {
    num++;
    block.style.left = `${num}px`;
    if (num < 50) {
      return plus();
    } else if (num > 349) {
      num = 0;
    } else {
      num += 50;
    }
    moftBlock();
  
  }
  block.addEventListener("click", plus)

