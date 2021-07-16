import { todos } from "./untils";

const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    todos.forEach((ele) => {
      todos.filter((item) => item.complete === false);
    });
  });
};

export default completeTodo;
