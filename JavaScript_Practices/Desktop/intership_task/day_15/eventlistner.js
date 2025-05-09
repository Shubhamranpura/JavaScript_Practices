let card = document.querySelector(".addingcard");
let signlog = document.querySelector("#sign")
let cardcont =document.querySelector(".cards")
let count = 1
card.addEventListener('click',()=>{
 let newcard = document.createElement('div');
 newcard.classList.add("addingcard");
//  newcard.innerHTML = `<div id="sign">+</div>`
  newcard.innerText = count++;
 cardcont.append(newcard)
})