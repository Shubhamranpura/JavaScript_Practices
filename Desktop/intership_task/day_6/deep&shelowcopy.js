
// const username = "shubham";
// let username2 = username;// both have same memory allocation.
// username2 = "Ajay";// assigned new address of username2 in memory.

const place = ["Gota","Ranip","Thaltej","Sindhu Bhawan"]
// const place2 = place;// both have same memory allocation.
// place2.push("Vastrapur");// assigned new address of place2 in memory.
// console.log(place2);
// console.log(place);

// {
// //use shellow copy
// //1st method: use object.assign method
// let place2 =[]
// Object.assign(place2,place);
// place2.push("Vastrapur");
// place.push("naherunagar");
// console.log(place2);
// console.log(place);

// //2nd method : use spread operator
// let place3 = [...place];
// console.log(place3);

// //for refrence show  shellowcopyinmemory.jpg in file system.

// //3 method : use concat or slice method
// let place4 = place3.slice();
// place4.push("Vasana");
// console.log(place4);
// console.log(place3);

// let place5 = [].concat(place4);
// place5.push("Vaishnuv Devi");
// console.log(place5);

// //4th method : use array.from method
// let place6 = Array.from(place5);
// place6.push("Rakhiyal")
// console.log(place6);
// }

let emp1 = {
  firstname  : "shubham",
  lastname : "ranpura",
  age : 25,
  location:{
    city : "Ahmedabad",
    state : "Gujarat",
  }
}
let emp2 = {...emp1};
emp1.location.city = "surat";
console.log(emp1);
console.log(emp2);

// this is not work effectively because the value of nasted object's properties have same refrence in memory so change in city is affected in both objects.

let uid = "my uid is 4546554 id"
console.log(uid.indexOf("id",2));
console.log(uid.indexOf("id",10));

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}