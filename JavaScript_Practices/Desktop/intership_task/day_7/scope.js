// // const myname = "shubham";
// // debugger
// const myage = 22;
// let myfname = "shubham";
// var a = 4;
// function details (){
//   let myfname  = "harsh";
//   const myage = 22;
//   console.log(myfname+ " " + myage);
// }
// details();
// // for detail see scope in file system.
// 'use strict'
let university = "Parul University";
let college = "Parul Institute of Engineering and Technology";

function Btech(){
  const department = "Information Technology";
  const classes = "N-bilding";
  console.log(`Students in ${university} in ${department} and his class is located at ${classes} in campus.`)
  {
    native = "surendranagar"
    let state = "Gujrat"
  }
  console.log(native)
  function student(){
    const sname  = "shubham";
    let sem = 7;
    console.log(`${sname} is in ${sem} semester in ${department} and his class`)
    
    function messege(){
      let messege = `hello ${sname}`
      console.log(messege);
      let hostel = "no";
    }
    messege();
    // console.log(hostel); // its gives error because we can't access the variable of neasted  function's into parent functions. 
  }
  student();
}
Btech();
console.log(native);