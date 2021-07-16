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

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
};


if (storageAvailable('localStorage')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  if (todos === null) {
    todos = [
      {
        description: 'Drink water',
        completed: false,
        index: 0,
      },
    ];
  }
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
  if (todos !== null) {
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
  }
  dragDrop();
};

document.addEventListener('DOMContentLoaded', displayData());

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

const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
     const final = todos.filter(filtered)
    localStorage.setItem('todos', JSON.stringify(final));  
  });
};

const filtered = () => {
  const newArr = [];
  todos.forEach((ele, id) => {
    const object = document.getElementById(id);
    if (object !== null) {
      object.remove();
      if (ele.completed === false) {
        const arr = ele;
        newArr.push(arr);
        localStorage.setItem('todos', JSON.stringify(newArr));
        return newArr;
      }
    }
    displayData();
  });
};

list.addEventListener('click', (ev) =>  {
  todos.forEach((items) => {
    if (items.completed === false && ev.target.tagName === 'LI') {
      items.completed = true;
      ev.target.classList.toggle('list-item-completed');
    } else if (items.completed === false && ev.target.tagName === 'LI') {
      items.completed = false;
      ev.target.classList.toggle('list-item');
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
});

displayData();

export { displayData, addTodo, deleteData, completeTodo };