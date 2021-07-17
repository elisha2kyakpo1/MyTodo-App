const todo = [];
const completeTodoLi = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const final = todo.filter((ele) => ele);
    localStorage.setItem('todos', JSON.stringify(final));
  });
};

const deleteDataInf = (id) => {
  const object = document.getElementById(id);
  if (object !== null) {
    todo.splice(object, 1);
    object.remove();
    localStorage.setItem('todos', JSON.stringify(todo));
  }
};

export {
  completeTodoLi,
  deleteDataInf,
};
