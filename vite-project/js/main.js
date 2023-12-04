import "../styles/style.css";
import { drinks } from "./drinks";
const DOMSelectors = {
  card: document.querySelector("#con"),
  button: document.getElementById("btn"),
  but: document.getElementById("but"),
  idk: document.querySelector("idk"),
  light: document.getElementById("light"),
  all: document.getElementById("all"),
};
DOMSelectors.light.addEventListener("click", function () {
  if(document.body.classList.contains("light")){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
  if(document.card.classList.contains("light")){
    document.card.classList.add("dark");
    document.card.classList.remove("light");
  } else{
    document.card.classList.add("light");
    document.card.classList.remove("dark");
  }
  if(document.idk.classList.contains("light")){
    document.idk.classList.add("dark");
    document.idk.classList.remove("light");
  } else{
    document.idk.classList.add("light");
    document.idk.classList.remove("dark");
  }
});


const type = drinks.filter((drinks) => drinks.type != "still");
console.log(type)
drinks.forEach((drink) => DOMSelectors.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${drink.name}</h1>,<img class="image" src="${drink.img}" alt=""></div>`))
DOMSelectors.button.addEventListener("click", function () {
  const type = drinks.filter((drinks) => drinks.type != "still");
  DOMSelectors.card.innerHTML = "";
  type.forEach((drink) => DOMSelectors.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${drink.name}</h1>,<img class="image" src="${drink.img}" alt=""></div>`))
console.log(type)
})
DOMSelectors.but.addEventListener("click", function () {
  const type = drinks.filter((drinks) => drinks.type != "carbonated");
  DOMSelectors.card.innerHTML = "";
  type.forEach((drink) => DOMSelectors.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${drink.name}</h1>,<img class="image" src="${drink.img}" alt=""></div>`))
})
DOMSelectors.all.addEventListener("click", function () {
  DOMSelectors.card.innerHTML = "";
  drinks.forEach((drink) => DOMSelectors.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${drink.name}</h1>,<img class="image" src="${drink.img}" alt=""></div>`))
})
