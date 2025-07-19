const cube = document.getElementById("cube");
const moveBtn = document.getElementById("moveBtn");
const resetBtn = document.getElementById("resetBtn");

let moved = false;

moveBtn.addEventListener("click", () => {
  cube.style.left = moved ? "0px" : "40px";
  moved = !moved;
});

resetBtn.addEventListener("click", () => {
  cube.style.left = "0px";
  moved = false;
});
