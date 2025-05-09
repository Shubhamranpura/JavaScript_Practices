const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
// const firstimage = document.querySelector('img');


//  for(let i=2;i<=100;i++){
//   let newimg = firstimage.cloneNode();
//   newimg.src  = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png `
//   container.appendChild(newimg);
//  }
// for(let i=2; i<=100; i++){
//   let newimg = document.createElement('img');
//   let numb = document.createElement('p')
//   newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;

//   newimg.classList.add('new-class'); // Adding a new class
//   newimg.appendChild(numb);
//   numb.textContent = i;
//   container.appendChild(newimg);
// }
// first way 
for (let i = 1; i <= 50; i++) {
  let imgcont = document.createElement('div');
  imgcont.classList.add('imgcont');

  let imges = document.createElement('img')
  imges.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;

  let numb = document.createElement('p');
  numb.textContent = i;

  imgcont.append(imges, numb)
  container.appendChild(imgcont);
}

// second way
let myhtml = '';
for (let i = 1; i <= 10; i++) { // Start from 1 instead of 0
  myhtml += `
   <div class="imgcont">
   <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png" alt="pokemonimg">
      <p>${i}</p>
  </div>
   `;
}
container.innerHTML = myhtml; 


