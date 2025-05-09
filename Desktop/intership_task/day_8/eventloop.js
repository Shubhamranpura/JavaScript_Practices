let a = {
  "name":"Shubham",
  "age":21,
  "mob":7984018956,
  "city":"Ahemdabad"  
};

function company(){
  console.log("Sculptsoft");
}
company();
setTimeout(function details(){
  console.log(a.name);
  console.log(a.age);
  console.log(a.mob);
  console.log(a.city);
},3000)
setTimeout(function moredetais(){
  console.log("College - Parul");
  console.log("Branch - CSE");
  console.log("Year - 4th");
},4000)
 console.log("All details Fatched");