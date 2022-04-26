const buttons = document.getElementById("buttons");
const images = document.getElementById("img");
let indexColors = null;
let setIntervalID = null;

const trafficLight = (evento) => {
  stopInterval();
  turnOn[evento.target.id]();
};

const controlaIndiceColors = () => {
  if (indexColors < 2) {
    indexColors++;
  } else {
    indexColors = 0;
  }

  return indexColors;
};

const changeColors = () => {
  controlaIndiceColors();
  const color = ["red", "yellow", "green"];
  turnOn[color[indexColors]]();

  let mostrarCorNoConsole = null;
  switch (indexColors) {
    case 0:
      ShowinConsole = "red";
      break;
    case 1:
      ShowinConsole = "yellow";
      break;
    case 2:
      ShowinConsole = "green";
      break;

    default:
      break;
  }
  console.log(ShowinConsole);
};

const stopInterval = () => {
  clearInterval(setIntervalID);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (images.src = "./img/amarelo.png"),
  green: () => (images.src = "./img/verde.png"),
  automatic: () => {
    setIntervalID = setInterval(changeColors, 1000);
  },
};

buttons.addEventListener("click", trafficLight);
