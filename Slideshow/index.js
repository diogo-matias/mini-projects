"use strict";

const containerSlide = document.getElementById("container-slide");
const containerItems = document.getElementById("container-items");
const littleCirclesContainer = document.querySelector(".little-circles");
var imagemDaVez = 2;
let btnDaVez = 2;

const images = [
  { id: "1", url: "./img/6.png" },
  { id: "2", url: "./img/2.png" },
  { id: "3", url: "./img/3.png" },
  { id: "4", url: "./img/4.png" },
  { id: "5", url: "./img/5.jpg" },
  { id: "6", url: "./img/1.jpg" },
  { id: "7", url: "./img/7.jpg" },
  { id: "8", url: "./img/4.png" },
];

function addCircles() {
  images.forEach((image, index) => {
    littleCirclesContainer.innerHTML += `<div class="circle" id="${image.id}"> </div>`;
  });
}
addCircles();

function nada(click) {
  console.log(click.target.id);
}
const teste = littleCirclesContainer.addEventListener("click", clickCircle);

function loadImage(images, containerItems) {
  images.forEach((image) => {
    containerItems.innerHTML += `<div class="item">
    <img src="${image.url}">  
    <p class>${image.id}</p>;
    </div>`;
  });
}
loadImage(images, containerItems);

function clickCircle(click) {
  console.log(click.target.id);
  btnDaVez = click.target.id;

  if (imagemDaVez < btnDaVez) {
    console.log("chegou no if");
    let distancia = btnDaVez - imagemDaVez;
    for (let i = 0; i < distancia; i++) {
      next();
      imagemDaVez = btnDaVez;
    }
  } else if (imagemDaVez > btnDaVez) {
    console.log("chegou no else");
    let distancia = imagemDaVez - btnDaVez;
    for (let i = 0; i < distancia; i++) {
      previous();
      imagemDaVez = btnDaVez;
    }
  }
}

let item = document.querySelectorAll(".item");
function next() {
  containerItems.appendChild(item[0]);
  item = document.querySelectorAll(".item");
}

function previous() {
  let lastElement = item[item.length - 1];
  let firstElement = item[0];
  containerItems.insertBefore(lastElement, firstElement);
  item = document.querySelectorAll(".item");
}

const previousBtn = document
  .querySelector("#previous")
  .addEventListener("click", previous);

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", next);
