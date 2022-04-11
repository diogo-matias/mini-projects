const button = document.getElementById("button");
const jslamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./images/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./images/desligada.jpg";
  }
}

function lampBroken() {
  lamp.src = "./images/quebrada.jpg";
}
var i = 0;

jslamp.addEventListener("mouseover", lampOn);
jslamp.addEventListener("mouseleave", lampOff);
jslamp.addEventListener("dblclick", lampBroken);
button.addEventListener("click", textOnOff);

// You can use this function instead of function "TextOnOff"
function onOrOff() {
  i = i + 1;

  if (i == 1) {
    lampOn();
  } else if (i == 2) {
    i = 0;
    lampOff();
  }
}

function textOnOff() {
  if (button.textContent == "ON") {
    lampOn();
    button.textContent = "OFF";
  } else if (button.textContent == "OFF") {
    lampOff();
    button.textContent = "ON";
  }
}
