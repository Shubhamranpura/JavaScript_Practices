let imgs = document.querySelectorAll(".imgs");
console.dir(imgs);

let li1 = document.querySelector('[id="abouthtml"]');
console.dir(li1);

let imagechange = document.querySelectorAll(".imgchange");
console.log(imagechange);

const images = [
  
];

imagechange.forEach((img, index) => {
  img.src = images[index];
});
