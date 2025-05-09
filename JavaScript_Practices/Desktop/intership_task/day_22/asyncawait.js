// const  p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("this is product color")
//   }, 5000);
// })

// const  p2 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("this is product price")
//   }, 4000);
// })

// async function getProductdata(){
//   console.log("Product info");
  // p1.then((res)=>{console.log(res);})
  // p2.then((res)=>{console.log(res);})

  // let productcolor =  await p1;
  // console.log(productcolor);
  // let productprice =  await p2;
  // console.log(productprice);

  // In line 17, the JS engine  waits for the p1 promise  to be resolved if any, remaining promise consumes less times that means first promise will always gain the priority in async function.

  //if the flip  case the p2 will resolved  first then after p1 will resolved 

//   let productcolor =  await p2;
//   console.log(productcolor);
//   let productprice =  await p1
//   console.log(productprice);

// }
// getProductdata()

const api_url = "https://api.github.com/users/shubhamranpura";

async function fetchapi(api_url) {
    try {
        const res = await fetch(api_url);
        const data = await res.json();

        console.log(data);
        // console.log(data.name);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchapi(api_url);
fetchapi("https://api.github.com/users/shubhamranpura").catch((err)=>console.log(err))