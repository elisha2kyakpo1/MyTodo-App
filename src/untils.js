import dragDrop from "./drag";

const list = document.querySelector('.list-data');
const description = document.querySelector('.input');
const checkInput = document.createElement('INPUT');
const save = document.querySelector('.sub');
const inner = document.querySelector('.inner');
const title = document.querySelector('.title');
const error = document.createElement('p');
inner.insertBefore(error, title);
error.classList.add('error');
let todos = [];

if (localStorage) {
  todos.forEach((arr) => {
    if (arr !== 0) {
      const defaultToDo = {
        description: 'drink water',
        completed: false,
        index: todos.length,
      }
    
      todos.push(defaultToDo);
    }
  });
  todos = JSON.parse(localStorage.getItem('todos'));
}

const alert = () => {
  error.textContent = 'You did not add any To Do!';
  setTimeout(() => error.remove(), 3000);
};

const hidden = () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
};

const deleteData = (id) => {
  const object = document.getElementById(id);
  if (object !== null) {
    todos.splice(object, 1);
    object.remove();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

const displayData = () => {
  hidden();
  todos.forEach((item, indexEle) => {
    const listItem = document.createElement('li');
    checkInput.setAttribute('type', 'checkbox');
    listItem.setAttribute('id', item.index);
    checkInput.classList.add('check');
    listItem.draggable = true;
    listItem.classList.add('list-item');
    list.appendChild(listItem);
    const buttonDelete = document.createElement('i');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    span.classList.add('span');
    buttonDelete.classList.add('fas', 'fa-trash', 'delete');   
    listItem.textContent = `${item.description}`;
    listItem.appendChild(span1);
    listItem.appendChild(span);
    span.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteData(indexEle);
    });
  });

  dragDrop();
};

const addTodo = () => {
  const descriptionData = document.querySelector('.input').value;
  if (descriptionData === '') {
    alert();
  } else {
    const todoObject = {
      description: descriptionData,
      completed: false,
      index: todos.length,
    };
    todos.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  displayData();
};

save.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  displayData();
  description.value = '';
});


list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('list-item-completed');
  }
}, false);

export { displayData, addTodo, deleteData };