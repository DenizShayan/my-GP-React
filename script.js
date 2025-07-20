const cube = document.getElementById("cube");
const moveBtn = document.getElementById("moveBtn");
const resetBtn = document.getElementById("resetBtn");

let moved = false;

moveBtn.addEventListener("click", () => {
  if (moved) {
    cube.style.left = "0px";
  } else {
    cube.style.left = "200px";
  }
  moved = !moved;
});

resetBtn.addEventListener("click", () =>{
  cube.style.left="0px";
  moved= false;
});


//نوشتی ولی باهاس ریکت باشه پس همه چی داغون میشه

// از یه طرف فک میکنم نکست باشه بهتر نمیشه؟