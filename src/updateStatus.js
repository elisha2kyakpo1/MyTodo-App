const todo = [];
const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const final = todo.filter((ele) => ele);
    localStorage.setItem('todos', JSON.stringify(final));
  });
};

const deleteDataInf = (id) => {
  const object = document.getElementById(id);
  if (object !== null) {
    todos.splice(object, 1);
    object.remove();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};

export {
  completeTodo,
  deleteDataInf,
};
