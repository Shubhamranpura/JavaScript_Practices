const a =["Red","Yello","Green","white","blue","Orenge",{tname:"shubham",lname:"Ranpura"}]
let [color1 , color2]=a
let [,,color3]= a
let {4:color4 , 5:color5} =a
// destructure in object
let b={
  fname:"shubham",
  lname:"Ranpura",
  age:25,
  address:{
    city:"Ahemdabad",
    state:"Gujarat",
  }
}
let {fname, address:{city}} = b
console.log(fname);
console.log(city);


//destructure in function
function abc([red ,green]){
console.log(red , green);
}
abc(a)