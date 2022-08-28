// le DOM (Document object model)
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
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

capitale.addEventListener("mouseenter", () => {
  capitale.style.background = "rgba(0, 0, 0, 0.6";
});

capitale.addEventListener("mouseout", () => {
  capitale.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------------
//Keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "k") {
    keypressContainer.style.background = "blue";
  } else if (e.key === "t") {
    keypressContainer.style.background = "red";
  } else {
    keypressContainer.style.background = "teal";
  }

  if (e.key === "z") {
    ring(e.key);
  }
});

//---------------------------------------------------------------
//Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-50px";
  }
});

//-------------------------------------------------------------
// Form Events

const inputname = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
const formBox = document.getElementById("formBox");
let pseudo = "";
let language = "";

inputname.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    formBox.innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//-------------------------------------------------------------
// Load event (se déclenche une fois que l'entièreté du document est chargé)

window.addEventListener("load", () => {
  // console.log("Document chargé");
});

// -------------------------------------------------------------
// ForEach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// ---------------------------------------------------------------
// Bubbling vs Usecapture

// Un troisième paramètre peut-être ajouté à addEventListener : False (par défault en Bubbling) ou true (en useCapture). Quand on ajoute le paramètre true, l'addEvent listener vient se jouer en premier.

// Bubling => de Base, l'addEventListener est joué à la fin
document.body.addEventListener("click", () => {
  console.log("Click 1");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("Click 2");
  },
  true
);

// -------------------------------------------------------------
// stop propagation

// capitale.addEventListener("click", (e) => {
//   alert("hello");
//   e.stopPropagation();
// });

//-----------------------------------------------------------
//le BOM (Browser object model)

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "un titre", "height=300 width=600")
// window.close()

//Evenements adossé à window
//alert("hello")

//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

//prompt
let answer;

btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom");
  capitale.innerHTML += "<h3>Bravo à toi " + answer + "</h3>";
});

//setTimeOut (compte à rebours avant de déclencher la fonction. le dernier chiffre (ici 2000) est en millisecondes.)
setTimeout(() => {
  capitale.style.borderRadius = "300px";
}, 2000);

//setInterval
// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'> <h2>Nouvelle boite</h2> </div>";
// }, 1000);

// document.body.addEventListener("click", () => {
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// Location.replace("http://youtube.fr");

//navigator
// console.log(navigator.userAgent);

//History
// console.log(history);
// window.history.back();
// history.go(-2);

// -----------------------------------------------------------
// SetProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
