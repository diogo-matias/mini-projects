const buttonOn = document.getElementById("onButton");
const buttonOff = document.getElementById("offButton");
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

buttonOn.addEventListener("click", lampOn);
buttonOff.addEventListener("click", lampOff);
jslamp.addEventListener("mouseover", lampOn);
jslamp.addEventListener("mouseleave", lampOff);
jslamp.addEventListener("dblclick", lampBroken);
