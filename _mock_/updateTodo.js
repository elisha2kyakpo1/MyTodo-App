const tempTasks = [];

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

function displayTasks() {
  const tasks = [];
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
        window.update();
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
  <div class="top">
  <h1 class="title">Today's To Do</h1>
           <button id="refresh-btn" type="button" 
            onclick="window.restart()"
            type="button"> 
            <img class="add-btn-img" src="" alt="" /> 
            </button>
  </div>       
          <form onsubmit="window.callAddTask()" id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="submit" 
            type="button"> 
          
            </button>
          </form>       
          `;
};

export { updateTodo, displayTasks, tempTasks };