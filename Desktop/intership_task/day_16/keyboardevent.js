let mouseinput = document.querySelector('input');
let pera  = document.querySelector('h1')
// mouseinput.addEventListener('keypress',(e)=>{

//   console.log(e.code);
//   console.log(e.key);
// })
// mouseinput.addEventListener('keyup',(e)=>{
//   console.log(e.key);
//   console.log(e.code);
//   console.log(`${e.key} pressed`);
// })

mouseinput.addEventListener('keydown',(e)=>{
  console.log(e.key);
  console.log(e.code);
  console.log(`${e.key} pressed`);
})
//In terms of keyboard events,
//  "keydown" refers to the moment when a user presses a key on the keyboard, while "keyup" refers to the moment when the user releases that same key; essentially, "keydown" captures the key press action, and "keyup" captures the key release action. 
  // Key points: 
  // Keydown: Fires when a key is pressed down.
  // Keyup: Fires when a key is released. 
  // Example use case: 
  // If you want to trigger an action as soon as a user starts pressing a key, you would use the "keydown" event.
  // If you want to perform an action only after the user has fully released a key, you would use the "keyup" event


