let greencon = document.querySelector('.green');
let pinkcon = document.querySelector('.pink');
let red = document.querySelector('.red');

// window.addEventListener('click',(e)=>{
//   console.log('window clicked');
// });
// document.addEventListener('click',(e)=>{
//   console.log('documrnt clicked');
// });
// document.body.addEventListener('click',(e)=>{
//   console.log('body clicked');
// });
greencon.addEventListener('click',(e)=>{
  console.log('green clicked');
},);
pinkcon.addEventListener('click',(e)=>{
  console.log('pink clicked');
},)
// red.addEventListener('click',(e)=>{
//   console.log('red clicked');
// },{capture:true,once:true}) // capture the event from top most parents to that red div and once true defines only one time the event is fire.
red.addEventListener('click',(e)=>{
  e.stopPropagation();// To Stop event bubling.
  console.log('red clicked');
},{capture:true})
