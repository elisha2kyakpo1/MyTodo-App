import { filtered } from './untils';

const todo = [];
const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const final = todo.filter(filtered);
    localStorage.setItem('todos', JSON.stringify(final));
  });
};

export default completeTodo;
