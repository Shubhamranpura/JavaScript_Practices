const image = document.querySelector("img");
const button = document.querySelector("button");
const blockbtn = document.querySelector(".block-btn");

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      image.src = json.message;
    });
});

// const starttime = Date.now()
// let currenttime = starttime

// while(currenttime+4000 > starttime){
//   currenttime = Date.now()
// }

blockbtn.addEventListener("click", () => {
  const starttime = Date.now();
  let currenttime = starttime;

  while (starttime + 4000 > currenttime) {
    currenttime = Date.now();
  }
});
