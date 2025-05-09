const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
        resolve("Successfully fetched from first product"); 
    }, 50); 
//     reject("can't fetched from first product");
//  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfully fetched from third product");
  }, 3000);
  //   reject("Can't fetched from second product");
  // }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successfully fetched from third product");
  }, 2000);
//   reject("Can't fetched from third product");
// }, 3000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// It will not wait for other promises if one of them got rejected it will return that promise.


// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

  // it will returned an array of objects which is contains properties like status : "fullfilled" and with value:"Successfully get the data" if it"s resolved and reason:"can't get the data" when if it's got rejected.

  // Promise.race([p1, p2, p3])
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.error(err);
  // });

  // it will returns eaither  rejected or resolved promise amoung all promises.

  Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

  // it will return the first resolved value in case of all value are rejected then we get the Aggregate error (error contains more errors)