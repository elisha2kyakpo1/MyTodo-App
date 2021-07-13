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

eval("const list = document.querySelector('.list-data');\nconst description = document.querySelector('.input');\nconst save = document.querySelector('.sub');\nconst listItem = document.createElement('li');\nconst icon = document.createElement('i');\nconst span = document.createElement('span');\nconst checkbox = document.createElement('checkbox');\ncheckbox.classList.add('check');\nlistItem.draggable = true;\nlistItem.classList.add('list-item');\nlist.appendChild(checkbox);\nlist.appendChild(listItem);\nconst todos = [\n  {\n  description: 'drink tea',\n  completed: false,\n  index: 0\n  },\n  {\n  description: 'drink water',\n  completed: true,\n  index: 1\n  },\n  {\n    description: 'coding',\n    completed: false,\n    index: 2\n  }\n]\n\nconst addTodo = () => {\n  const description = document.querySelector('.input').value;\n  todos.push(description);\n  listItem.innerHTML = `${description}<span class=\"span\"><i class=\"fas fa-trash delete\"></i></span`;\n} \n\nconst clearCompleted = () => {\n  if (todos.completed.value = true) {\n    const button = document.querySelector('.button');\n    button.addEventListener('click', (e) => {\n      e.preventDefault();\n      e.target.remove.parentElement\n    })\n  }\n};\n\nsave.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (description !== '') {\n    addTodo();\n    description.value = '';\n  }\n})\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\n  e.preventDefault();\n})\n\n\n\n\n//# sourceURL=webpack://mytodo-app/./src/index.js?");

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