const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
     const final = todos.filter(filtered);
    localStorage.setItem('todos', JSON.stringify(final));  
  });
};

export default completeTodo;
