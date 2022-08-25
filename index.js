//Click events

const capitale = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

capitale.addEventListener("click", () => {
  capitale.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.style.background = "green";
  response.classList.toggle("show-response");
});

btn2.addEventListener("click", () => {
  response.style.background = "red";
  response.classList.toggle("show-response");
});

//--------------------------------------------------------

// Mouse events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2)";
});
