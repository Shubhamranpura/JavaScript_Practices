let card = document.querySelector(".addingcard");
let signlog = document.querySelector("#sign")
let cardcont =document.querySelector(".cards")
let addcard = document.querySelector('.add-card')
let count = 1
addcard.addEventListener('click',()=>{
 let newcard = document.createElement('div');
 newcard.classList.add("addingcard");
//  newcard.innerHTML = `<div id="sign">+</div>`
  newcard.innerText = count++;
 cardcont.append(newcard)
})
// let c = 0
// while(count<=100){
// let idi = setInterval(()=>{
//   addcard.click()
//   c++
// },300)
// }
// clearInterval(idi)