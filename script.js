let pen = " #541505";

const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
  const divrow = document.createElement("div");
  divrow.classList.add("flexrow");
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    divrow.appendChild(div)
    div.classList.add("minidivs")
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = pen;
    })
  }
  container.appendChild(divrow);
}

// ---------------------------------------------------------------Events-----------------------------------------------------------

const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  pen = "transparent";
})
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
  pen = "";
})
