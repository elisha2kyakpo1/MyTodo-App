const list = document.querySelector('.list-data');
const description = document.querySelector('.input');
const save = document.querySelector('.sub');

let todos = []

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
  return 'You did not add any to do!'
}

const addTodo = () => {
  const description = document.querySelector('.input').value;
  if (description === '') {
    alert();
  }else{
    const todoObject = {
      description: description,
      completed: false,
      index: todos.length,
    }
    todos.push(todoObject);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

} 

const clearCompleted = () => {
  if (todos.completed.value = true) {
    const button = document.querySelector('.button');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.remove.parentElement
    })
  }
};

const hidden = () => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

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
      deleteData(indexEle.index);
    };
  })
}

const deleteData = (id) => {
  const selectedItem = todos.findIndex((item) => item.index === id)
  todos.splice(selectedItem, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

save.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  displayData();
  description.value = '';
})

displayData();


