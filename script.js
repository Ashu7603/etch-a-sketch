let pen = "#79BB59";

let userInput = 16;
gridGenerator(userInput);
const grid = document.querySelector("#size");
grid.addEventListener("click", () => {
  let userInput = prompt("enter the number of boxes");
  if (userInput <= 100) {
    gridGenerator(userInput);
  }
  else {
    alert("Limit is too much");
  }
})


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
        div.style.backgroundColor = pen;
      })
    }
    container.appendChild(divrow);
  }
}

// ---------------------------------------------------------------Events-----------------------------------------------------------

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  if (pen == "transparent") {
    pen = "#79BB59";
  }
  else {
    pen = "transparent";
  }
})

const reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
  gridGenerator(16);
})

// let r = "transparent";
// let g = "transparent";
// let b = "transparent";

// function colour(r, g, b) {
//   r = Math.floor(Math.random() * 100);
//   g = Math.floor(Math.random() * 100);
//   b = Math.floor(Math.random() * 100);
//   return (r, g, b);
// }

// const raindow = document.querySelector("#rainbow");
// raindow.addEventListener("click", () => {
//   pen = colour();
// })