import TrashImg from './delete.svg';
import MoreImg from './more.svg';

const addTask = (tasks) => {
  const str = document.getElementById('description').value;
  const firstLetter = str.charAt(0).toUpperCase();
  str.replace(str.charAt(0), firstLetter);
  const description = str;
  const completed = false;
  const date = new Date();
  const id = date.getMilliseconds();

  if (!tasks) {
    tasks = [];
  }

  const index = tasks.length + 1;

  if (tasks && description !== '') {
    const task = {
      description,
      completed,
      index,
      id,
    };
    tasks.push(task);
    tasks.sort((taskA, taskB) => {
      const indexA = taskA.position;
      const indexB = taskB.position;
      if (indexA < indexB) {
        return -1;
      }
      if (indexA > indexB) {
        return 1;
      }
      return 0;
    });
    window.update(tasks);
  }
};

const editTask = (divId, tasks) => {
  const list = document.getElementsByClassName('drag-div');
  Array.from(list).forEach((li) => {
    if (li.id === divId) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];
      img.src = TrashImg;
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        removeTask(divId, tasks);
      });
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = MoreImg;
      img.style.cursor = 'all-scroll';
    }
  });
};

const clearTodo = (tasks) => {
  const temp = [];
  tasks.forEach((task) => {
    if (task.completed !== true) {
      temp.push(task);
    }
  });
  window.update(temp);
};

export { addTask, editTask, clearTodo };