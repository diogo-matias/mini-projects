const buttons = document.getElementById("buttons");
const image = document.getElementById("image");
let intervalID = null;
let indexColors = -1;
let revertLightControl = true;

function TurnOnLight(click) {
  stopInterval();

  turnOn[click.target.id]();
}

const revertLight = () => {
  revertLightControl === false
    ? (revertLightControl = true)
    : (revertLightControl = false);

  changeNameButton();

  indexColors = -1;
};

function changeNameButton() {
  const buttonAutomatic = document.getElementById("automaticButton");

  buttonAutomatic.textContent =
    revertLightControl === false ? "REVERSE" : "REVERSE AGAIN";
}
const resetIndex = (index, limit) => (index > limit ? (index = -1) : index);

function automaticButton() {
  indexColors++;

  let buttons = ["redButton", "yellowButton", "greenButton"];
  if (revertLightControl) {
    buttons.reverse();
  }

  turnOn[buttons[indexColors]]();
  indexColors = resetIndex(indexColors, 1);
}

function stopInterval() {
  clearInterval(intervalID);
}

const turnOn = {
  redButton: () => (image.src = "./img/vermelho.png"),
  yellowButton: () => (image.src = "./img/amarelo.png"),
  greenButton: () => (image.src = "./img/verde.png"),
  automaticButton: () => {
    intervalID = setInterval(automaticButton, 1000);
    revertLight();
  },
};

buttons.addEventListener("click", TurnOnLight);
