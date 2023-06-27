var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");


//Color picker
css.textContent = "linear-gradient(to right, "
+ color1.value
+ ", "
+ color2.value
+ ")";

function gradientPaster() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

//Generate random color, Chat GPT

function getRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

//Random color buttons

function pickRandomColor1() {
    const randomColor1 = getRandomColor();
    color1.value = randomColor1;
    gradientPaster();
  }
  
  function pickRandomColor2() {
    const randomColor2 = getRandomColor();
    color2.value = randomColor2;
    gradientPaster();
  }

button1.addEventListener("click", pickRandomColor1);

button2.addEventListener("click", pickRandomColor2);

color1.addEventListener("input", gradientPaster);

color2.addEventListener("input", gradientPaster);

