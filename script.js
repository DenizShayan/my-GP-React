const box = document.getElementById("box");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let posX = 0;
let posY = 0;
let velocityX = 2;
let velocityY = 2;
let animation;

function moveBox() {
  const container = document.querySelector(".container");
  const maxX = container.clientWidth - box.clientWidth;
  const maxY = container.clientHeight - box.clientHeight;

  posX += velocityX;
  posY += velocityY;

  if (posX <= 0 || posX >= maxX) velocityX *= -1;
  if (posY <= 0 || posY >= maxY) velocityY *= -1;

  box.style.left = `${posX}px`;
  box.style.top = `${posY}px`;

  animation = requestAnimationFrame(moveBox);
}

startBtn.addEventListener("click", () => {
  if (!animation) {
    moveBox();
  }
});

resetBtn.addEventListener("click", () => {
  cancelAnimationFrame(animation);
  animation = null;
  posX = 0;
  posY = 0;
  box.style.left = "0px";
  box.style.top = "0px";
});


//نوشتی ولی باهاس ریکت باشه پس همه چی داغون میشه، خب پس به این دست نزن و یکی دیگه اش رو بنویس! 

// از یه طرف فک میکنم نکست باشه بهتر نمیشه؟
// از عمو جرج پاتریک بپرسیم ببینیم چطوره؟
// گفت که جرج پاتریک بمورد... 🤣🤣🤣
// پس باهاس تا پایان اسباب کشی صبر کنیم 😉