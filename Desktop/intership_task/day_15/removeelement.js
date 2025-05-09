
let h1 = document.querySelector('h1');
let container = document.querySelector('.container');

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

container.remove()
