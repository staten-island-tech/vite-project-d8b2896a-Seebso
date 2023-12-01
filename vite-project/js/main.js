import "../styles/style.css";
import { drinks } from "./drinks";
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <p> fwesinju </p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
const DOMSelectors = {
  card: document.querySelector("#con"),
}
console.log(drinks)
drinks.forEach((drink) => DOMSelectors.card.insertAdjacentHTML("beforeend",`<div class="card"><h1> ${drink.name}</h1>img src="drink.img"</div>`))