// console.log(
//   // Math.pow(5,5),
//   // Math.random(5),
//   // Math.floor(2.0000),// remove decimal part but javascript automatically convert 2.9999999999999999999999 into 3 
//   // Math.floor(2.99999999999999999999999)
//   // Math.ceil(2.00000000056),// giving upmost bigger value 
//   // Math.round(4.9),
//   // Math.round(4.1),
//   // Math.round(4.4)
//   // Math.round(-2.6),// it gives -3 value 
//   // Math.round(-3.9)// it gives -4 value 
//   Math.floor(Math.random()*20)
// )

const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);
