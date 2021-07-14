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

eval("const list = document.querySelector('.list-data');\nconst description = document.querySelector('.input');\nconst save = document.querySelector('.sub');\n\nconst todos = []\n\nconst alert = () => {\n  return 'You did not add any to do!'\n}\n\nconst addTodo = () => {\n  const description = document.querySelector('.input').value;\n  if (description === '') {\n    alert();\n  }else{\n    const todoObject = {\n      description: description,\n      completed: false,\n      index: todos.length,\n    }\n    todos.push(todoObject);\n  }\n\n} \n\nconst clearCompleted = () => {\n  if (todos.completed.value = true) {\n    const button = document.querySelector('.button');\n    button.addEventListener('click', (e) => {\n      e.preventDefault();\n      e.target.remove.parentElement\n    })\n  }\n};\n\nconst hidden = () => {\n  while (list.lastElementChild) {\n    list.removeChild(list.lastElementChild);\n  }\n}\n\nconst displayData = () => {\n  hidden();\n  todos.forEach((item) => {\n    const listItem = document.createElement('li');\n    const checkbox = document.createElement('checkbox');\n    listItem.setAttribute('id', item.index)\n    checkbox.classList.add('check');\n    listItem.draggable = true;\n    listItem.classList.add('list-item');\n    list.appendChild(checkbox);\n    list.appendChild(listItem);\n    const buttonDelete = document.createElement('i');\n    const span = document.createElement('span');\n    span.classList.add('span');\n    buttonDelete.classList.add('fas', 'fa-trash', 'delete');\n    listItem.textContent = `${item.description}`;\n    listItem.appendChild(span);\n    span.appendChild(buttonDelete);\n    buttonDelete.addEventListener('click', (e) => {\n      const deleteElement = e.target.getAttribute('id');\n      todos[deleteData];\n    });\n  })\n}\n\nconst deleteData = (id) => {\n  const selectedItem = todos.findIndex((item) => item.index === id)\n  todos.splice(selectedItem, 1);\n}\n\nsave.addEventListener('click', (e) => {\n  e.preventDefault();\n  addTodo();\n  displayData();\n  description.value = '';\n})\n\ndisplayData();\n\n\n\n\n//# sourceURL=webpack://mytodo-app/./src/index.js?");

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