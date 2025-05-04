// const resolvebtn = document.getElementById('#resolve-btn');
// const rejectebtn = document.querySelector("#reject-btn");

const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

let p = new Promise((resolve,reject)=>{
  // console.log(p);
  resolveBtn.addEventListener('click',()=>{
    resolve({fname:"shubham"});
    console.log(p);
  })
  rejectBtn.addEventListener('click',()=>{
    reject({fname:"shubham",cstatus:"rejected"});
    console.log(p);
  })
  
  // reject('rejected')
})
let val= p.then((data)=>{
  console.log(data);
  return "hii"
})
console.log(val);

// .then method is used to get the data from the resolve function.when the exucution time .then() method is goes to microtask queue and its priorities are more then callback queue. then() method allways retuen the promise ob ject we must  return a value in .then() method for promise chaining (.then ().thne()....) as same .catch() method returns the promise object
// .catch((data)=>{
//   console.log(data);
// })

