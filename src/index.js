const list = document.querySelector('.list-data');
const description = document.querySelector('.input');
const save = document.querySelector('.sub');

const todos = []

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
  todos.forEach((item) => {
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
    buttonDelete.addEventListener('click', (e) => {
      const deleteElement = e.target.getAttribute('id');
      todos[deleteData];
    });
  })
}

const deleteData = (id) => {
  const selectedItem = todos.findIndex((item) => item.index === id)
  todos.splice(selectedItem, 1);
}

save.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  displayData();
  description.value = '';
})

displayData();


