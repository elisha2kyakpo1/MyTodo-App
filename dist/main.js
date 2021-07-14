/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const list = document.querySelector('.list-data');\nconst description = document.querySelector('.input');\nconst save = document.querySelector('.sub');\nconst inner = document.querySelector('.inner');\nconst title = document.querySelector('.title');\nconst error = document.createElement('p');\ninner.insertBefore(error, title);\nerror.classList.add('error');\nlet todos = [];\n\nif (localStorage) {\n  todos = JSON.parse(localStorage.getItem('todos'));\n  if (todos === null) {\n    todos = [\n      {\n        description: 'drink water',\n        completed: false,\n        index: 0,\n      },\n    ];\n  }\n}\n\nconst alert = () => {\n  error.textContent = 'You did not add any To Do!';\n  setTimeout(() => error.remove(), 3000);\n};\n\nconst hidden = () => {\n  while (list.lastElementChild) {\n    list.removeChild(list.lastElementChild);\n  }\n};\n\nconst deleteData = (id) => {\n  const objective = document.getElementById(id);\n  objective.remove();\n  todos.splice(objective, 1);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst displayData = () => {\n  hidden();\n  todos.forEach((item, indexEle) => {\n    const listItem = document.createElement('li');\n    const checkbox = document.createElement('checkbox');\n    listItem.setAttribute('id', item.index);\n    checkbox.classList.add('check');\n    listItem.draggable = true;\n    listItem.classList.add('list-item');\n    list.appendChild(checkbox);\n    list.appendChild(listItem);\n    const buttonDelete = document.createElement('i');\n    const span = document.createElement('span');\n    span.classList.add('span');\n    buttonDelete.classList.add('fas', 'fa-trash', 'delete');\n    listItem.textContent = `${item.description}`;\n    listItem.appendChild(span);\n    span.appendChild(buttonDelete);\n    buttonDelete.onclick = () => {\n      deleteData(indexEle);\n    };\n  });\n};\n\nconst addTodo = () => {\n  const descriptionData = document.querySelector('.input').value;\n  if (description === '') {\n    alert();\n  } else {\n    const todoObject = {\n      description: descriptionData,\n      completed: false,\n      index: todos.length,\n    };\n    todos.push(todoObject);\n    localStorage.setItem('todos', JSON.stringify(todos));\n  }\n  displayData();\n};\n\nsave.addEventListener('click', (e) => {\n  e.preventDefault();\n  addTodo();\n  displayData();\n  description.value = '';\n});\n\ndisplayData();\n\n//# sourceURL=webpack://mytodo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;