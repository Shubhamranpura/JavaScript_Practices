const taskinput = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-list');
const addbtn = document.querySelector('.add-btn');

addbtn.addEventListener('click', (e) => {
  let tasks = taskinput.value.trim();
  if (tasks == '') return false;

  const taskList = document.createElement('li');
  taskList.classList.add('todo-item');
  taskList.innerHTML = `<span>${tasks}</span>
          <div class="action-buttons">
              <button class="complete-btn">✔</button>
              <button class="delete-btn">✖</button>
          </div>`;

  let completbtn = taskList.querySelector('.complete-btn');
  let deletebtn = taskList.querySelector('.delete-btn');

  completbtn.addEventListener('click', () => {
    taskList.classList.toggle('completed');
    saveToLocalStorage();
  });

  deletebtn.addEventListener('click', () => {
    todolist.removeChild(taskList);
    saveToLocalStorage();
  });

  todolist.appendChild(taskList);
  taskinput.value = '';
  saveToLocalStorage(); 
});

const saveToLocalStorage = () => {
  const divtoSave = document.querySelector('.todo-list'); 
  localStorage.setItem('todoList', divtoSave.innerHTML);
};

taskinput.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    addbtn.click();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedContent = localStorage.getItem('todoList'); // Ensure the key matches
  if (savedContent) {
    todolist.innerHTML = savedContent;

    todolist.querySelectorAll('.todo-item').forEach((listItem) => {
      const completebtn = listItem.querySelector('.complete-btn');
      const deleteBtn = listItem.querySelector('.delete-btn');

      completebtn.addEventListener('click', () => {
        listItem.classList.toggle('completed');
        saveToLocalStorage();
      });

      deleteBtn.addEventListener('click', () => {
        todolist.removeChild(listItem);
        saveToLocalStorage();
      });
    });
  }
});