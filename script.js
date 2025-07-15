const cube = document.getElementById("cube");
const moveBtn = document.getElementById("moveBtn");

let moved = false;

moveBtn.addEventListener("click", () => {
  if (moved) {
    cube.style.left = "0px";
  } else {
    cube.style.left = "200px";
  }
  moved = !moved;
});
