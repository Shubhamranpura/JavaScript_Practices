let inputtext = document.querySelector('.textarea');
let todolist = document.querySelector('.todocontainer');
let addbutton = document.querySelector('#btn');

addbutton.addEventListener('click', () => {
  let text = inputtext.value.trim(); 
  if (text === "") {
    alert("Please enter a todo item.");
    return;
  }

  let todosection = document.createElement('div');
  todosection.classList.add('todosection');

  let todotext = document.createElement('p');
  todotext.classList.add('todotext');
  todotext.innerText = text;

  let donebtn = document.createElement('button');
  donebtn.innerText = "Done";
  donebtn.classList.add('button');

  let cancelbtn = document.createElement('button');
  cancelbtn.innerText = "Not Doing";
  cancelbtn.classList.add('button');

  todosection.append(todotext, donebtn, cancelbtn);
  todolist.appendChild(todosection);

  donebtn.addEventListener('click', () => {
    const todoTextValue = todotext.textContent || todotext.innerText;
    todotext.classList.add('done');
    alert(`${todoTextValue} is Done`);

    setTimeout(() => {
      todosection.remove();
    }, 1000);
  });

  cancelbtn.addEventListener('click', () => {
    todosection.remove();
  });

  inputtext.value = "";
});