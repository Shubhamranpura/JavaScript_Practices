const element = [0,2,4,6,8,10]
// console.log(element.shift())
// console.log(element)
// console.log(element.unshift(-4))
// console.log(element)

const fruits = ["Apple","Mango","Banana","Aam"];
const oddarray = [1,3,5];
// console.log(fruits.unshift("Orange")
// console.log(element.concat(fruits,oddarray));
// console.log(element);
// console.log(fruits);

console.log(fruits.indexOf("Apple"));//return the index of element.
console.log(fruits.indexOf("10")); // If element is not exist in array its return the -1  as output.

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Pineapple"));// Its retuens the bolean value (true or false).

console.log(fruits.reverse());
console.log(fruits)
console.log(fruits.sort());
console.log(fruits)
 
// slice and splice in Array

console.log(fruits.slice()); // return the original array
console.log(fruits.slice(1,4)); // return the array from index 1 to 4
console.log(fruits)
console.log(fruits.splice(3,1,"Graps","pupaya"));
// Syntex - (fruits.splic(start index ,no of element want to remove from array , element to add);
console.log(fruits)

var namnumber = [["shubham",45],["harsh",56]];
console.log(namnumber);
console.log(namnumber[0]);
console.log(namnumber[1][0]);
