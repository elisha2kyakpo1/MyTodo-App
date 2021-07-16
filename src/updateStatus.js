
const completeTodo = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
     const final = todos.filter(filtered)
     console.log(final)
    localStorage.setItem('todos', JSON.stringify(final));  
  });
};

export default completeTodo;
