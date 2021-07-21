const addTask = (tasks) => {
  const description = 'str';
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
  }
};

const removeTask = (data, tasks) => {
  const str = data.replace('div', '');
  const newTasks = [];
  tasks.forEach((task) => {
    if (task.index !== parseInt(str, 10)) {
      newTasks.push(task);
    }
  });
  window.update(newTasks);
};

const editTask = (divId, tasks) => {
  const list = document.getElementsByClassName('drag-div');
  Array.from(list).forEach((li) => {
    if (li.id === divId) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];
      img.src = 'TrashImg';
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        removeTask(divId, tasks);
      });
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = 'MoreImg';
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
};

export { addTask, editTask, clearTodo };
