// var  a=5;
// {
//   var  a= 9;
//   let b=20;
//   const c=300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a)--> value is changed its becomes a=9
// this consept called as shadowing 
// the  block variable a is shadowing the global variable a
// the output of the  console is in order of:
// 9
// 20
// 300
// 9


//  shadowing with let
let  a=5;
{
  // var a= 9;--> its  give the SyntaxError: Identifier 'a' has already been declared beacuse we can't change the property of a variable who wad declared by let keyword
  let a= 9; // its executes successfully but outside scope the variable  is in the another scope ( script )
  let b= 20;
  const c=300;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a) 
//the same things happen with the const keyword 

