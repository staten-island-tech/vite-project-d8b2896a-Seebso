import "../styles/style.css";


document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href=https://vitejs.dev/guide/features.html" target="_blank>Documentation</a>
`;
/* function filters(){
  //selectes all category buttons
  let buttons = document.getQuerySelectorAll("#btn")
  //for each button we add click event
  buttons.forEach((btn)=> btn.eventListener("click", function(){
    // get button text to be used later
    let category = btn.textConetent.toLowerCase()
    //create new array by filtering items by category (the button clicked)
    let newArr = items.filter((el)=>el.type.includes(category))
    //remove all old cards
    document.querySelector(".parent").innerHTML = ""
    //passing in new filtered array to put card on screen
    populate(newArr)
  }))
} */
