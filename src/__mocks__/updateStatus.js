const tempTasks = [];
const tasks = [];

function updateLocalStorage(retrieve) {
  if (retrieve === true) {
    if (tasks === null) {
      tasks;
    }
  } else {
    tasks = [];
  }
  displayTasks();
};

function update(data) {
  if (!data) {
    const response = updateTodo();
    tasks = response;
  } else {
    tasks = data;
  }
  window.updateLocalStorage(false);
};

const updateTodo = () => {

  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const check = document.createElement('input');
  check.type = 'checkbox';
  const input = document.createElement('input');
  ul.setAttribute('id', 'list');
  ul.appendChild(li);

  const list = document.getElementsById('list');
  if (list.length !== 0) {
    Array.from(list).forEach((li, index) => {
      const div = li.getElementsByTagName('ul')[0];
      const completed = div.getElementsByTagName('input')[0].checked;
      const id = div.getElementsByTagName('input')[0].name;
      const description = div.getElementsByTagName('input')[1].value;

      const task = {
        completed,
        description,
        index,
        id,
      };
      tempTasks.push(task);
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
};

function displayTasks() {
  if (tasks) {
    tasks.forEach((task, index) => {
      const { description, id } = task;
      const li = document.createElement('li');
      li.id = index;
      li.addEventListener('drop', (EventTarget) => {
        li.classList.remove('dragging');
        drop(EventTarget);
      });
      li.addEventListener('dragover', (EventTarget) => {
        allowDrop(EventTarget);
      });
      const div = document.createElement('div');
      const divId = `div${task.index}`;
      div.classList.add('task');
      div.id = divId;
      div.classList.add('drag-div');
      div.draggable = true;
      div.addEventListener('click', () => editTask(divId, tasks));
      div.data = index;
      div.addEventListener('dragstart', (EventTarget) => {
        div.classList.add('dragging');
        drag(EventTarget);
      });
      const inputCheckbox = document.createElement('input');
      inputCheckbox.addEventListener('click', () => {
        update();
      });
      inputCheckbox.type = 'checkbox';
      inputCheckbox.name = task.id;
      inputCheckbox.id = `input-check-${id}`;
      inputCheckbox.checked = task.completed;
      const inputTask = document.createElement('input');
      inputTask.id = `li-description-${id}`;
      inputTask.type = 'text';
      inputTask.classList.add('description');
      inputTask.placeholder = description;
      inputTask.value = description || null;
      inputTask.data = task.index;
      inputTask.addEventListener('change', () => {
        window.update();
      });
      const button = document.createElement('button');
      button.classList.add('edit-btn');
      button.id = `edit-btn-${id}`;
      button.type = 'button';
      const img = document.createElement('img');
      img.src = MoreImg;
      img.alt = 'image';
      img.classList.add('add-btn-img');
      button.appendChild(img);
      div.appendChild(inputCheckbox);
      div.appendChild(inputTask);
      div.appendChild(button);
      li.appendChild(div);
      list.appendChild(li);
    });
  }
  const template = `
  <div class='top'>
  <h1 class='title'>Today's To Do</h1>
           <button id='refresh-btn' type='button' 
            onclick='window.restart()'
            type='button'> 
            <img class='add-btn-img' src='' alt='' /> 
            </button>
  </div>       
          <form onsubmit='window.callAddTask()' id='task-form'>
            <input
              id='description'
              type='text'
              class='text'
              placeholder='Add to your list ...'
            />
            <button id='add-btn' type='submit' 
            type='button'> 
          
            </button>
          </form>       
          `;
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

export {updateTodo,
  displayTasks,
  tempTasks,
  tasks,
  editTask,
removeTask,
};