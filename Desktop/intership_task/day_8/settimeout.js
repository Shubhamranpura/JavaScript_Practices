// let a = setTimeout("console.log('hello')",1000);
// let b = setTimeout("console.log('shubham')",2000);
// let c = setTimeout("console.log('ranpura')",3000);

setTimeout(function a() {
  console.log("hii")
  let b = console.log(arguments)
}, 3000);
let p = setInterval(function a() {
  console.log("hii")
  let b = console.log(arguments)
}, 2000);

clearInterval(p)// for stop the execution for the setInterval.
clearTimeout(p)// for stop the execution for the setTimeout.


