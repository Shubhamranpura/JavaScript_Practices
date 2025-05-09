// const nums1 = [0,1,2,3,4,5,6,7];
// function add(...nums){
//   let sum = 0;
//   // console.log(a,b,c);
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     }
//   return sum
// }
// console.log(add(1,2,3,...nums1))

let number  = [0,1,2,3,4,5,6,7,8,9]
function add(...number){
  let sum = 0;
   return number.reduce((acc,curr)=>acc +curr)
  //  return [...arguments].reduce((acc,curr)=>acc+curr) with using of arguments 
  return Array.from(number).reduce((acc,curr)=>acc +curr)
}
console.log(add(...number));