let pen = "rgb(121, 187, 89)";
let userInput = 16;
let randomSwitch = false;
let prevState = 0;

// ------------------------------------------------------------State Values----------------------------------------------------------

// -1 = pen
// 0 = eraser
// 1 = random colour

// -------------------------------------------------------------User Input-----------------------------------------------------------

gridGenerator(userInput);
const grid = document.querySelector("#size");
grid.addEventListener("click", () => {
  let userInput = prompt("enter the number of boxes");
  if (userInput == null || userInput == undefined || userInput == "") {
    gridGenerator(16);
  }
  else if (userInput <= 100) {
    gridGenerator(userInput);
  }
  else {
    alert("Limit is too much");
  }
})

// ---------------------------------------------------------------Grid Generator-----------------------------------------------------

function gridGenerator(userInput) {
  const container = document.querySelector(".container");
  container.innerHTML = " ";
  for (let i = 0; i < userInput; i++) {
    const divrow = document.createElement("div");
    divrow.classList.add("flexrow");
    for (let j = 0; j < userInput; j++) {
      const div = document.createElement("div");
      divrow.appendChild(div)
      div.classList.add("minidivs")
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = colour();
      })
    }
    container.appendChild(divrow);
  }
}

// ---------------------------------------------------------------Eraser-----------------------------------------------------------

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  if (pen == "transparent") {
    pen = "rgb(121, 187, 89)";
    if (prevState == 1) {
      randomSwitch = true;
      return;
    }
    prevState = 0;
  }
  else {
    prevState = randomSwitch ? 1 : -1;
    pen = "transparent";
  }
  randomSwitch = false;
})

// -----------------------------------------------------------Reset Button----------------------------------------------------------

const reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
  gridGenerator(16);
})

// -----------------------------------------------------------Random Colour----------------------------------------------------------

function colour() {
  if (randomSwitch) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return (`rgb(${r}, ${g}, ${b})`);
  }
  return (pen);
}

const raindow = document.querySelector("#rainbow");
raindow.addEventListener("click", () => {
  if (randomSwitch) pen = 'rgb(121, 187, 89)';
  randomSwitch = !randomSwitch;
})
