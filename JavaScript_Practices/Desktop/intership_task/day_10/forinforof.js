const abc = [12,54,"Ajay","shubham"]
// for(let i = 0; i<abc.length ; i++){
//   console.log(abc[i])
// }
for( let i of abc){
  console.log(i)
}
console.log("************")
const b= {
  fname : "shubham",
  lname : "Ranpura",
  age : 21,
  city:"ahemdabad"
}
for ( let m in b){
  console.log(b[m])
}
let personkey  = Object.keys(b)
for (personkey in b){
  console.log(b[personkey])
}
const p= {
  fname : "shubham",
  lname : "sharma",
  age : 21,
  city:"ahemdabad"
}
let val  = Object.values(p)
console.log(val)
// let val = Object.entries(p)
for(let b in val ){
  console.log(val[b])
}
/// for-each methods.

const height  = ["5.5","5.6","5.4","5.10","5.8","6.2"]
height.forEach((b)=>{
  console.log((+b))
})
