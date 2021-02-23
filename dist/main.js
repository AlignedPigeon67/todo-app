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

/***/ "./src/DomHandler.js":
/*!***************************!*\
  !*** ./src/DomHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"displayTodoItems\": () => (/* binding */ displayTodoItems),\n/* harmony export */   \"clearTodos\": () => (/* binding */ clearTodos),\n/* harmony export */   \"clearProjects\": () => (/* binding */ clearProjects),\n/* harmony export */   \"showModal\": () => (/* binding */ showModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\n\n\nconst main = document.querySelector('.main-container');\nconst projectSidebar = document.querySelector('.project-sidebar');\nconst listArea = document.querySelector('.list-area');\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\n\nconst displayProjects = (project, index, curProj) => {\n  const projectCardHTML = `\n    <div class=\"project-card\" data-index=\"${index}\" data-is-active=\"${\n    project === curProj ? true : false\n  }\">\n      <p class=\"project-name\">${project.title}</p>\n      <p class=\"project-date\">${project.dueDate}</p>\n    </div>\n  `;\n  projectSidebar.insertAdjacentHTML('beforeend', projectCardHTML);\n};\n\nconst displayTodoItems = todo => {\n  const todoCardHTML = `\n    <div class=\"todo-item-card\">\n      <p>${todo.title}</p>\n      <p>${todo.dueDate}</p>\n    </div>\n  `;\n  listArea.insertAdjacentHTML('beforeend', todoCardHTML);\n};\n\nconst clearProjects = () => (projectSidebar.textContent = '');\n\nconst clearTodos = () => (listArea.textContent = '');\n\nconst showModal = () => {\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n  main.classList.add('blur');\n};\n\nconst closeModal = () => {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n  main.classList.remove('blur');\n};\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/DomHandler.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title, dueDate) {\n    this.title = title;\n    this.dueDate = dueDate;\n    this.todoItems = [];\n  }\n\n  addToList(todoItem) {\n    this.todoItems.push(todoItem);\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/Project.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\nclass TodoItem {\n  constructor(title, description, dueDate, highPriority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.highPriority = highPriority;\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/TodoItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _DomHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomHandler */ \"./src/DomHandler.js\");\n\n\n\n\n\n\nconst populateTodos = proj => {\n  _DomHandler__WEBPACK_IMPORTED_MODULE_2__.clearTodos();\n  proj?.todoItems.forEach(todo => _DomHandler__WEBPACK_IMPORTED_MODULE_2__.displayTodoItems(todo, currentProject));\n};\n\nconst populateProjects = (projects, curProj) => {\n  _DomHandler__WEBPACK_IMPORTED_MODULE_2__.clearProjects();\n  projects.forEach((proj, i) => _DomHandler__WEBPACK_IMPORTED_MODULE_2__.displayProjects(proj, i, curProj));\n};\n\nconst setCurrentProject = proj => {\n  currentProject = proj;\n  populateTodos(proj);\n};\n\nconst paintingProject = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('Paint kitchen', '21/3/21');\nconst takeNap = new _Project__WEBPACK_IMPORTED_MODULE_0__.default('Take a nap', '07/8/21');\n\nconst buyPaint = new _TodoItem__WEBPACK_IMPORTED_MODULE_1__.default(\n  'Go buy paint',\n  'Nip to the shops for some paint you twat!',\n  '20/3/21',\n  false\n);\n\nconst lieDown = new _TodoItem__WEBPACK_IMPORTED_MODULE_1__.default('Lie down', 'Find bed', '07/7/21', true);\n\npaintingProject.addToList(buyPaint);\ntakeNap.addToList(lieDown);\n\nconst projectArray = [];\n\nprojectArray.push(paintingProject);\nprojectArray.push(takeNap);\n\nlet currentProject = projectArray[0];\n\npopulateProjects(projectArray, currentProject);\npopulateTodos(currentProject);\n\ndocument.addEventListener(\n  'click',\n  event => {\n    const element = event.target;\n    if (element.matches('.project-card')) {\n      setCurrentProject(projectArray[event.target.getAttribute('data-index')]);\n      populateProjects(projectArray, currentProject);\n    } else if (element.closest('.project-card')) {\n      setCurrentProject(\n        projectArray[event.target.parentElement.getAttribute('data-index')]\n      );\n      populateProjects(projectArray, currentProject);\n    }\n\n    if (element.matches('.add-item-button')) {\n      _DomHandler__WEBPACK_IMPORTED_MODULE_2__.showModal();\n    }\n\n    if (element.matches('.overlay') || element.matches('#cancel')) {\n      _DomHandler__WEBPACK_IMPORTED_MODULE_2__.closeModal();\n    }\n  },\n  false\n);\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;