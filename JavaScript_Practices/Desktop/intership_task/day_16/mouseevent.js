let card = document.querySelector(".addingcard");
let signlog = document.querySelector("#sign")
let cardcont = document.querySelector(".cards")
let count = 1

// card.addEventListener('mousedown', (e) => {
//   console.log(e);
//   let newcard = document.createElement('div');
//   newcard.classList.add("addingcard");
//   newcard.innerHTML = `<div id="sign">+</div>`
//   newcard.innerText = count++;
//   cardcont.append(newcard)// press kero tyare  
// })

// The mousedown and the click event in JavaScript occur when the mouse button is pressed. But the click event handles the button press as well as the button release while mousedown only handles the button click.
// card.addEventListener('click', (e) => {
//   console.log(e);
//   let newcard = document.createElement('div');
//   newcard.classList.add("addingcard");
//   newcard.innerHTML = `<div id="sign">+</div>`
//   newcard.innerText = count++;
//   cardcont.append(newcard)// press karine chhodi daine (click kerine )
// })

// card.addEventListener('mouseup', (e) => {
//   console.log(e);
//   let newcard = document.createElement('div');
//   newcard.classList.add("addingcard");
//   newcard.innerHTML = `<div id="sign">+</div>`
//   newcard.innerText = count++;
//   cardcont.append(newcard)
// }) // jya sudhi press karine na chhodo tya sudhi 

// card.addEventListener('mouseenter', (e) => {
//   console.log(e);
//   let newcard = document.createElement('div');
//   newcard.classList.add("addingcard");
//   newcard.innerHTML = `<div id="sign">+</div>`
//   newcard.innerText = count++;
//   cardcont.append(newcard)
// })// jetli var te element per mouse arrow jay tetli vat event fire that

card.addEventListener('mouseleave', (e) => {
  console.log(e);
  let newcard = document.createElement('div');
  newcard.classList.add("addingcard");
  newcard.innerHTML = `<div id="sign">+</div>`
  newcard.innerText = count++;
  cardcont.append(newcard)});
  // jyare tena perthi mouse no arrow leave thay tyre aa event fir thay che 

  // card.addEventListener('mouseover', (e) => {
  //   console.log(e);
  //   let newcard = document.createElement('div');
  //   newcard.classList.add("addingcard");
  //   newcard.innerHTML = `<div id="sign">+</div>`
  //   newcard.innerText = count++;
  //   cardcont.append(newcard)})

    // The key difference between "mouseover" and "mouseenter" is that "mouseover" triggers an event when the mouse enters an element or any of its child elements within the DOM hierarchy, while "mouseenter" only triggers when the mouse enters the specific element itself, without triggering for any child elements; essentially, "mouseenter" does not bubble up the DOM tree like "mouseover" does.


    // document.addEventListener('wheel', (e) => {
    //   console.log(e);
    //   let newcard = document.createElement('div');
    //   newcard.classList.add("addingcard");
    //   newcard.innerHTML = `<div id="sign">+</div>`
    //   newcard.innerText = count++;
    //   cardcont.append(newcard)})
 // jyare mouse nu center nu center nu button scroll karie tyare event fire thay 

//  Document.addEventListener('scroll', (e) => {
//   console.log(e);
//   let newcard = document.createElement('div');
//   newcard.classList.add("addingcard");
//   newcard.innerHTML = `<div id="sign">+</div>`
//   newcard.innerText = count++;
//   cardcont.append(newcard)})

// card.addEventListener('touchstart', (e) => {
//       console.log(e);
//       const newCard = document.createElement('div')
//       newCard.classList.add('addingcard')
//       newCard.innerText = count++
//       cardcont.append(newCard)
//   })// for mobile after press the event will fire.
     
//   card.addEventListener('touchend', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('addingcard')
//     newCard.innerText = count++
//     cardcont.append(newCard)
// })// for mobile after clicking and  release the event will fire.

card.addEventListener('pointermove', (e) => {
  console.log(e);
  const newCard = document.createElement('div')
  newCard.classList.add('addingcard')
  newCard.innerText = count++
  cardcont.append(newCard)
})