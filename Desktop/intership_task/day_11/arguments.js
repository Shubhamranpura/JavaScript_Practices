// const add = function(){
//   let sum = 0;
//   for(let i=0;i<arguments.length;i++){
//    sum+=arguments[i];
//   }
//   return sum;
// }
// console.log( add(1,2,3,4));

// const aname = function(a,c,b){
//   Array.from(arguments)
//   return arguments
// }
// let b = console.log(aname(1,2,3));

// let multiply=function(a,b){
//  return a*b
// }
// multiply(4,5)
//                      default argumrnts
//                          ^
let tossdice = function(val=6){
  let b=console.log(Math.floor(Math.random()*val)+1);
  return b
}
console.log( tossdice(9));