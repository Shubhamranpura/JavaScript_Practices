let val = [4,5,6,7,8,9]
let mar = [22,23,45,56,78]
let b = {
  "a": "shubham",
  "b": "bhai"
}
//let newarr = [...val,...mar,...b]// it will give type error beacause b is an object not iterable. we can only apply spread operator on array , strings ,sets.
let newarr = [...val,...mar,...Object.values(b)]
console.log(newarr);

let obj = {
  fname : "shubham",
  lname : "ranpura",
  age : 21

}
let obj2 = {...obj, 
  city :"Ahemdabad",
  place : "Nikol"
}
console.log(obj2)
let hii = {
  fname: "sahil",
  lname : "ranpura",
  age : 21
}
let hello = {...hii,city : "Ahemdabad",place : "Nikol"}
console.log(hello);
(Object.values(hello)).map((values,items))
