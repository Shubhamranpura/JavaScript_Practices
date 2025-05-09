// const username = document.querySelector("#username");
// const pera = document.querySelector("p");

// username.addEventListener('click',(e)=>{
//   inputval = e.target.value;
//   pera.innerText = e.target.value;
// })
const username = document.querySelector("#username");
const pera = document.querySelector("p");

// username.addEventListener('input', (e) => {
//   const inputval = e.target.value;
//   pera.innerText = inputval; 
// });

// username.addEventListener('change',(e)=>{
//   const inputval = e.target.value;
//   pera.innerText = "this is change event "
// })// when click outside the function

// username.addEventListener('focus',(e)=>{
//   pera.innerText = "You are focusing on the input field";
// })// when focusing on input 

// username.addEventListener('blur',(e)=>{
//   let inputval = e.target.value;
//   pera.innerText = "this is blur event";
// })

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  let formconstructor = new FormData(form) 
  console.log(formconstructor);
  // In JavaScript, FormData is both:
  // An Object:
  // It represents a set of key-value pairs, similar to a dictionary or a JavaScript object, which can be used to send data to a server.
  // A Constructor:
  // It's a function that creates a new FormData object, optionally taking an HTML form element as an argument (as we can see in line 36 )to pre-populate the object with the form's data.
  //   Purpose:
  // FormData is primarily used to send data from HTML forms to a server, but it can also be used independently of forms to transmit keyed data.
  for(let p of formconstructor.entries()){
    console.log(p[1]);
    // pera.textContent = p[0];
    // pera.textContent = p[0];
  }
});