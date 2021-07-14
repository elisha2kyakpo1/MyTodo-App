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
  todos = JSON.parse(localStorage.getItem('todos'));
  if (todos === null) {
    todos = [
      {
        description: 'drink water',
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

const handleDragStart = (event) => {
  // style.opacity = '0.4';
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.style.backgroundColor = 'yellow';
};

const handleDragEnd = () => {
  this.style.opacity = '1';
};

const deleteData = (id) => {
  const objective = document.getElementById(id);
  todos.splice(objective, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  objective.remove();
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
    span1.appendChild(checkInput);
    listItem.appendChild(span);
    listItem.textContent = `${item.description}`;
    listItem.appendChild(span);
    span.appendChild(buttonDelete);
    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();
      deleteData(indexEle);
    });
    
    listItem.addEventListener('dragstart', (e) => {
      e.preventDefault();
      handleDragStart(indexEle); 
  
    });
    listItem.addEventListener('dragend', (e) => {
      e.preventDefault();
      handleDragEnd(), false 
    });
  });
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

displayData();

export { displayData, addTodo, deleteData };