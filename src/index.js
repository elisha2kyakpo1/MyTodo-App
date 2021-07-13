const list = document.querySelector('.list-data');
const description = document.querySelector('.input');
const save = document.querySelector('.sub');
const listItem = document.createElement('li');
const checkbox = document.createElement('checkbox');
listItem.classList.add('list-item');
list.appendChild(listItem);
const todos = [
  {
  description: 'drink tea',
  completed: false,
  index: 0
  },
  {
  description: 'drink water',
  completed: true,
  index: 1
  }
]

const addTodo = () => {
  const description = document.querySelector('.input').value;
  todos.push(description);
  todos.forEach((item) => {
    listItem.textContent = `${item.description}`;
  })
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

save.addEventListener('click', (e) => {
  e.preventDefault();
  if (description !== '') {
    addTodo();
    description.value = '';
  }
})

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
})


