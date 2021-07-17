/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"clearTodo\": () => (/* binding */ clearTodo)\n/* harmony export */ });\n/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.svg */ \"./src/delete.svg\");\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n\n\n\nconst addTask = (tasks) => {\n  const str = document.getElementById('description').value;\n  const firstLetter = str.charAt(0).toUpperCase();\n  str.replace(str.charAt(0), firstLetter);\n  const description = str;\n  const completed = false;\n  const date = new Date();\n  const id = date.getMilliseconds();\n\n  if (!tasks) {\n    tasks = [];\n  }\n\n  const index = tasks.length + 1;\n\n  if (tasks && description !== '') {\n    const task = {\n      description,\n      completed,\n      index,\n      id,\n    };\n    tasks.push(task);\n    tasks.sort((taskA, taskB) => {\n      const indexA = taskA.position;\n      const indexB = taskB.position;\n      if (indexA < indexB) {\n        return -1;\n      }\n      if (indexA > indexB) {\n        return 1;\n      }\n      return 0;\n    });\n    window.update(tasks);\n  }\n};\n\nconst removeTask = (data, tasks) => {\n  const str = data.replace('div', '');\n  const newTasks = [];\n  tasks.forEach((task) => {\n    if (task.index !== parseInt(str, 10)) {\n      newTasks.push(task);\n    }\n  });\n  window.update(newTasks);\n};\n\nconst editTask = (divId, tasks) => {\n  const list = document.getElementsByClassName('drag-div');\n  Array.from(list).forEach((li) => {\n    if (li.id === divId) {\n      li.style.backgroundColor = '#fff59c78';\n      const img = li.getElementsByTagName('img')[0];\n      img.src = TrashImg;\n      img.style.cursor = 'pointer';\n      img.addEventListener('click', () => {\n        removeTask(divId, tasks);\n      });\n    } else {\n      li.style.backgroundColor = 'white';\n      const img = li.getElementsByTagName('img')[0];\n      img.src = MoreImg;\n      img.style.cursor = 'all-scroll';\n    }\n  });\n};\n\nconst clearTodo = (tasks) => {\n  const temp = [];\n  tasks.forEach((task) => {\n    if (task.completed !== true) {\n      temp.push(task);\n    }\n  });\n  window.update(temp);\n};\n\n\n\n//# sourceURL=webpack://mytodo-app/./src/addRemove.js?");

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b93a41b701ac18332f8.svg\";\n\n//# sourceURL=webpack://mytodo-app/./src/delete.svg?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allowDrop\": () => (/* binding */ allowDrop),\n/* harmony export */   \"drag\": () => (/* binding */ drag),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\nlet toLiIndex = null;\n\nconst allowDrop = (e) => {\n  e.preventDefault();\n  toLiIndex = e.currentTarget.id;\n};\n\nconst drag = (e) => {\n  e.dataTransfer.setData('text', e.currentTarget.id);\n};\n\nconst drop = (e) => {\n  e.preventDefault();\n  const data = e.dataTransfer.getData('text');\n  const oldDiv = document.getElementById(data);\n  const oldLi = document.getElementById(oldDiv.data);\n  const newLi = document.getElementById(toLiIndex);\n  const newDiv = newLi.getElementsByTagName('div')[0];\n  const oldDivData = oldDiv.data;\n  const newDivData = newDiv.data;\n  oldDiv.data = newDivData;\n  newDiv.data = oldDivData;\n  oldLi.appendChild(newDiv);\n  oldLi.removeChild(oldDiv);\n  newLi.appendChild(oldDiv);\n\n  window.update();\n};\n\n\n\n//# sourceURL=webpack://mytodo-app/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* harmony import */ var _updateStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateStatus */ \"./src/updateStatus.js\");\n/* harmony import */ var _recycle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recycle.svg */ \"./src/recycle.svg\");\n/* harmony import */ var _more_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more.svg */ \"./src/more.svg\");\n/* harmony import */ var _addRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addRemove */ \"./src/addRemove.js\");\n\n\n\n\n\n\nlet tasks = null;\n\nwindow.updateLocalStorage = function updateLocalStorage(retrieve) {\n  if (retrieve === true) {\n    if (tasks === null) {\n      tasks = JSON.parse(window.localStorage.getItem('tasks'));\n    }\n  } else {\n    window.localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n  window.displayTasks();\n};\n\nwindow.callAddTask = function callAddTask() {\n  (0,_addRemove__WEBPACK_IMPORTED_MODULE_4__.addTask)(tasks);\n};\n\nwindow.restart = function restart() {\n  tasks = null;\n  window.updateLocalStorage(false);\n};\n\nwindow.update = function update(data) {\n  if (!data) {\n    const response = updateTodo();\n    tasks = response;\n  } else {\n    tasks = data;\n  }\n\n  window.updateLocalStorage(false);\n};\n\nwindow.displayTasks = function displayTasks() {\n  const container = document.getElementById('container');\n  const list = document.createElement('ul');\n  list.id = 'list';\n  const EnterImg = '&#8629';\n\n  if (tasks) {\n    tasks.forEach((task, index) => {\n      const { description, id } = task;\n      const li = document.createElement('li');\n      li.id = index;\n      li.addEventListener('drop', (EventTarget) => {\n        li.classList.remove('dragging');\n        (0,_drag__WEBPACK_IMPORTED_MODULE_0__.drop)(EventTarget);\n      });\n\n      li.addEventListener('dragover', (EventTarget) => {\n        (0,_drag__WEBPACK_IMPORTED_MODULE_0__.allowDrop)(EventTarget);\n      });\n\n      const div = document.createElement('div');\n      const divId = `div${task.index}`;\n\n      div.classList.add('task');\n      div.id = divId;\n      div.classList.add('drag-div');\n      div.draggable = true;\n      div.addEventListener('click', () => (0,_addRemove__WEBPACK_IMPORTED_MODULE_4__.editTask)(divId, tasks));\n      div.data = index;\n      div.addEventListener('dragstart', (EventTarget) => {\n        div.classList.add('dragging');\n        (0,_drag__WEBPACK_IMPORTED_MODULE_0__.drag)(EventTarget);\n      });\n\n      const inputCheckbox = document.createElement('input');\n      inputCheckbox.addEventListener('click', () => {\n        window.update();\n      });\n      inputCheckbox.type = 'checkbox';\n      inputCheckbox.name = task.id;\n      inputCheckbox.id = `input-check-${id}`;\n      inputCheckbox.checked = task.completed;\n\n      const inputTask = document.createElement('input');\n      inputTask.id = `li-description-${id}`;\n      inputTask.type = 'text';\n      inputTask.classList.add('description');\n      inputTask.placeholder = description;\n      inputTask.value = description || null;\n      inputTask.data = task.index;\n      inputTask.addEventListener('change', () => {\n        window.update();\n      });\n\n      const button = document.createElement('button');\n      button.classList.add('edit-btn');\n      button.id = `edit-btn-${id}`;\n      button.type = 'button';\n\n      const img = document.createElement('img');\n      img.src = _more_svg__WEBPACK_IMPORTED_MODULE_3__;\n      img.alt = 'image';\n      img.classList.add('add-btn-img');\n\n      button.appendChild(img);\n      div.appendChild(inputCheckbox);\n      div.appendChild(inputTask);\n      div.appendChild(button);\n      li.appendChild(div);\n      list.appendChild(li);\n    });\n  }\n  const template = `\n  <div class=\"top\">\n  <h1 class=\"title\">Today's To Do</h1>\n           <button id=\"refresh-btn\" type=\"button\" \n            onclick=\"window.restart()\"\n            type=\"button\"> \n            <img class=\"add-btn-img\" src=${RecycleImg} alt=\"\" /> \n            </button>\n  </div>       \n          <form onsubmit=\"window.callAddTask()\" id=\"task-form\">\n            <input\n              id=\"description\"\n              type=\"text\"\n              class=\"text\"\n              placeholder=\"Add to your list ...\"\n            />\n            <button id=\"add-btn\" type=\"submit\" \n            type=\"button\"> \n          ${EnterImg}\n            </button>\n          </form>       \n          `;\n\n  container.innerHTML = template;\n  const buttonHtml = document.createElement('button');\n  buttonHtml.id = 'clear-btn';\n  buttonHtml.addEventListener('click', () => {\n    (0,_addRemove__WEBPACK_IMPORTED_MODULE_4__.clearTodo)(tasks);\n  });\n  buttonHtml.textContent = 'Clear completed tasks.';\n  container.insertAdjacentElement('beforeend', list);\n  container.insertAdjacentElement('beforeend', buttonHtml);\n};\n\nwindow.updateLocalStorage(true);\nwindow.displayTasks();\n\n//# sourceURL=webpack://mytodo-app/./src/index.js?");

/***/ }),

/***/ "./src/more.svg":
/*!**********************!*\
  !*** ./src/more.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3adb9cb42cd31f0448c7.svg\";\n\n//# sourceURL=webpack://mytodo-app/./src/more.svg?");

/***/ }),

/***/ "./src/recycle.svg":
/*!*************************!*\
  !*** ./src/recycle.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ede1a9b720f79252166c.svg\";\n\n//# sourceURL=webpack://mytodo-app/./src/recycle.svg?");

/***/ }),

/***/ "./src/updateStatus.js":
/*!*****************************!*\
  !*** ./src/updateStatus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateTodo = () => {\n  const list = document.getElementsByTagName('li');\n  const tempTasks = [];\n\n  if (list.length !== 0) {\n    Array.from(list).forEach((li, index) => {\n      const div = li.getElementsByTagName('div')[0];\n      const completed = div.getElementsByTagName('input')[0].checked;\n      const id = div.getElementsByTagName('input')[0].name;\n      const description = div.getElementsByTagName('input')[1].value;\n\n      const task = {\n        completed,\n        description,\n        index,\n        id,\n      };\n      tempTasks.push(task);\n    });\n  }\n\n  return tempTasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodo);\n\n\n//# sourceURL=webpack://mytodo-app/./src/updateStatus.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;