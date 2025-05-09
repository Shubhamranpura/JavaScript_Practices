let sname  = ["shubham","krutath","Dharmik","Mahesh"]
let ok =sname.map((names,index)=>{console.log(index,(names.charAt().toUpperCase()+ names.slice(1)))});


// let ok=sname.forEach((names,index)=>{console.log(index,(names.charAt().toUpperCase()+ names.slice(1)))});

// The diffrence between forEach and map is map return the new Array where forEach can't.
// map:
// Used to transform an array by applying a function to each element.
// Returns a new array containing the results of the transformation.

// forEach:
// Used to perform an operation (like logging, updating, etc.) on each element of an array.
// Does not return anything (returns undefined).

//                     filter method


let finame = ["january","february","march","april","may"]
let done = finame.filter((mname)=>{
  if(mname.includes("feb")){
    return false//not includes in array.
  }
  return true// includes in the array.
})

const students = [
  {
      name: 'akash',
      age: 21,
  },
  {
      name: 'adarsh',
      age: 17,
  },
  {
      name: 'amir',
      age: 18,
  },
  {
      name: 'raman',
      age: 23,
  },
  {
      name: 'nidhi',
      age: 16,
  },
]
let resultarr = students.filter((ages)=>{
  if(ages.age>=18){
    return true// includes in the array.
  }
  return false// not includes in the array.
}).map((students1)=>{
  return students1.name
}).filter((capit)=>{capit.charAt(0)+capit.split(1)}
)
//output
// ['Akash', 'Amir', 'Raman'] 

// The filter() method creates a new array with all elements that pass the test implemented by the provided













// function frequency() {
//   let fname = "requirment"
//   let obj = {}
//   for (let a in fname) {
//     // console.log(fname[a])
//     if (fname[a] in obj) {
//       obj[fname[a]]++
//     }
//     else {
//       obj[fname[a]] = 1
//     }
//   }
//   return obj
// }
// console.log(frequency())



