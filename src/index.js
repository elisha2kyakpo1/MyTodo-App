const list = document.querySelector('.list-data');
const description = document.querySelector('.input');
const save = document.querySelector('.sub');
const inner = document.querySelector('.inner');
const title = document.querySelector('.title');
const button = document.querySelector('.button');
const error = document.createElement('p');
inner.insertBefore(error, title);
error.classList.add('error');
let todos = [];

if (localStorage) {
  todos = JSON.parse(localStorage.getItem('todos'));
  if (todos === null) {
    todos = [
      {
        description: 'drink water',
        completed: false,
        index: 0,
      },
    ];
  };
};

const alert = () => {
  error.textContent = 'You did not add any To Do!';
  setTimeout(() => error.remove(), 3000);
};

const addTodo = () => {
  const description = document.querySelector('.input').value;
  if (description === '') {
    alert();
  } else {
    const todoObject = {
      description: description,
      completed: false,
      index: todos.length,
    }
    todos.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  displayData();
};

const clearCompleted = () => {
  if (todos.completed.value === 'true') {
    button.addEventListener('click', (e) => {
      e.preventDefault();
    });
  };
};

const hidden = () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  };
};

const deleteData = (id) => {
  const objective = document.getElementById(id);
  objective.remove();
  todos.splice(objective, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const displayData = () => {
  hidden();
  todos.forEach((item, indexEle) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('checkbox');
    listItem.setAttribute('id', item.index)
    checkbox.classList.add('check');
    listItem.draggable = true;
    listItem.classList.add('list-item');
    list.appendChild(checkbox);
    list.appendChild(listItem);
    const buttonDelete = document.createElement('i');
    const span = document.createElement('span');
    span.classList.add('span');
    buttonDelete.classList.add('fas', 'fa-trash', 'delete');
    listItem.textContent = `${item.description}`;
    listItem.appendChild(span);
    span.appendChild(buttonDelete);
    buttonDelete.onclick = () => {
      deleteData(indexEle);
    };
  });
};

save.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  displayData();
  description.value = '';
});

displayData();