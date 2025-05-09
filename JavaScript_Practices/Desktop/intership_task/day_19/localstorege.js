// const myname  = document.querySelector(".name-tag");
// const fname  = document.querySelector(".name");

// const userage  = document.querySelector('.age');
// const age  = document.querySelector('.age-tag');
 

// // myname.innerText =localStorage.getItem('myname');

// // fname.addEventListener('input',(e)=>{
// //    localStorage.setItem('myname',e.target.value);
// //    myname.innerText = localStorage.myname;
// // });
// // age.innerText = localStorage.getItem('myage');

// // userage.addEventListener('input',(e)=>{
// //   localStorage.setItem('myage',e.target.value)
// //    age.innerText = localStorage.myage
// // })

// //                       by the object.

// // mydata = {
// //   ename : "",
// //   age : ""
// // }
// const mydata = JSON.parse(localStorage.getItem('mydata')) || {}
// if(mydata.ename){
// myname.innerText = mydata.ename;}
// if(mydata.age){
// age.innerText = mydata.age;}
// fname.addEventListener('input',(e)=>{
//   mydata.ename = e.target.value;
//   localStorage.setItem('mydata',JSON.stringify(mydata))
//   myname.innerText = e.target.value;
// });

// userage.addEventListener('input',(e)=>{
//     mydata.age = e.target.value;
//     localStorage.setItem('mydata',JSON.stringify(mydata))
//     age.innerText = mydata.age
//   })