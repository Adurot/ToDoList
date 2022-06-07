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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trick\": () => (/* binding */ trick)\n/* harmony export */ });\n/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ \"./src/items.js\");\n\n//import {trick} from './magic.js'\n\n\n\n\nlet i=0;\nlet j=0;\nconst toDo=[];\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, 9, i, i+1, 5, i);\n\ni++;\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, 9, i, i+1, 5, i);\ni++;\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, 9, i, i+1, 5, i);\n\nconsole.log(toDo[i].priority+ \" Due Date for \" +i)\n\nfunction pageLoad()\n{\n\nlet div = document.createElement(\"div\");\ndiv.id = \"dtitle\";\ndiv.className = \"title\";\ndiv.style = \"background-color: blue;\";\ndiv.style.width = \"900px\";\ndiv.style.height = \"200px\";\ndiv.innerHTML= \"Version 1\";\ndocument.body.appendChild(div);  \n\nlet h1 = document.createElement(\"h1\");\n\nh1.id = \"title\";\n\nh1.style.width = \"300px\";\nh1.style.height = \"50px\";\nh1.innerHTML= \"To Do List\";\ndocument.getElementById(\"dtitle\").appendChild(h1);  \n}\n\n\nfunction listLoad()\n{\n\n\nlet div = document.createElement(\"div\");\ndiv.id = \"div\"+toDo[j].index;\ndiv.className = \"toDo\";\ndiv.style = \"background-color: yellow;\";\ndiv.style.width = \"900px\";\ndiv.style.height = \"200px\";\ndiv.innerHTML= \"Item number \" +toDo[j].index;\ndocument.body.appendChild(div);  \n\nlet h3 = document.createElement(\"h\");\n\nh3.id = \"title\"+toDo[j].index;\n\nh3.style.width = \"300px\";\nh3.style.height = \"50px\";\nh3.innerHTML= \"<br> Title for number \"+toDo[j].index+\" To Do\";\ndocument.getElementById(\"div\"+toDo[j].index).appendChild(h3);  \n\n\nlet h4 = document.createElement(\"h\");\nh4.id = \"description\"+toDo[j].index;\n\nh4.style.width = \"300px\";\nh4.style.height = \"50px\";\nh4.innerHTML= \"<br> Description for number \"+toDo[j].index+\" To Do\";\ndocument.getElementById(\"div\"+toDo[j].index).appendChild(h4);\n}\n\npageLoad();\nfor(j=0; j < toDo.length; j++){\nlistLoad();\n}\nlet place= \"spacestation\";\n\nconsole.log(\"test working\")\n\n\n\n\n\n\n\n\nconst square3 = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, 9, 8, 12, 100, 5);\n\nconsole.log(square3.area+ \"square 3 area\"); // 100\n\nconsole.log(square3.dueDate+ \"due date\")\n\n\nconst square = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10);\n\nconsole.log(square.area); // 100\n\n\n\n\n\n    \n    const jim = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(5, 10, 9, 12, 6, 5);\n    console.log(\"check1\")\n\n    const jim1= new _items_js__WEBPACK_IMPORTED_MODULE_0__.item (7, 12, 15, 4, 7, 23);\n    \n\n    var personActions = {\n        getFullName() {\n          return this.firstName + ' ' + this.lastName;\n        },\n      };\n\nconsole.log(jim.area); \n\nconst trick = function () {\n    return {\n        trick: () => { console.log(harry[1].firstName+ 'I am doing a trick'); }\n    }\n}\n\nconst eat = function () {\n    return {\n        eat: () => { console.log(place+ ' I am eating'); }\n    }\n}\nconst breathe = function () {\n    return {\n        breathe: () => { harry[1].firstName = \"billy\" }\n    }\n}\nconst swim = function () {\n    return {\n        swim: () => { console.log('I am swimming'); }\n    }\n}\n\n\n\n\nconst crazyName = function () {\n    return {\n        crazyName: () => { console.log(harry[1].getName+' I am doing a trick'); }\n    }\n}\n\nconst crazyName1 = function () {\n    return {\n        crazyName1: () => { console.log(harry[1].getName+' I am doing a trick'); }\n    }\n}\n\nfunction chName(namo) \n{\n    harry[1].firstName=namo;\n\n}\n\n/**const chName1= function () {\n    return{\n        chName1: () => {console.log(harry[1].firstName+ \"hello\");\n    }\n}*/\n\nconst superMagician = ()=> {\n return Object.assign(\n     {firstName: 'Monica',\n     set changeName(newName) {\n        this.firstName = newName;\n    }},\n     \n     \n     eat(),\n     breathe(),\n     trick()\n   );\n}\nconst noviceMagician = () => {\n return Object.assign(\n     {firstName: 'Jake', \n     set changeName(newName) {\n        this.firstName = newName;\n    },\n    get getName() {\n        return this.firstName;\n    }\n    },\n    \n     crazyName(),\n     crazyName1(),\n     eat(),\n     breathe(),\n     swim()\n   );\n}\n\nlet harry = superMagician();\n\nharry.eat();\n\nconsole.log(harry.firstName)\n\nharry[0] = noviceMagician();\nharry.changeName=\"17\";\n\nconsole.log(harry[0].firstName)\n\nconsole.log(harry.firstName)\n\nharry[1]  = noviceMagician();\n\nharry[1].changeName=\"Stationcraft\";\n\nharry[1].eat();\n\nharry[1].crazyName();\n\nharry[1].crazyName1();\n\nconsole.log(harry[1].firstName)\n\nharry[1].speak;\n\nharry[1].changeName=\"kip\"\n\n//harry[1].chName1;\n\nconsole.log(harry[1].firstName)\n\nharry.trick();\n\nharry.breathe();\nconsole.log(harry[1].firstName)\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"item\": () => (/* binding */ item)\n/* harmony export */ });\n\n\nclass item {\n    constructor(title, description, dueDate, priority, height, width, index) {\n        this.title=title;\n        this.description= description;\n        this.dueDate=dueDate;\n        this.priority=priority;\n        this.height = height;\n        this.width = width;\n        this.index=index;\n    }\n    // Getter\n    get area() {\n        return this.calcArea();\n    }\n    // Method\n    calcArea() {\n        return this.height * this.width;\n    }\n}\n\n\nfunction calcArea(height, width) {\n    return width*height;\n\n}\n\nconst square = new item(10, 10, 9, 8, 12, 6, 5);\n\nconsole.log(square.area); // 100\n\n\nconst square3 = new item(10, 10, 9, 8, 12, 100, 5);\n\n\n\nconsole.log(square3.area+ \"square 3 area\"); // 100\n\nconsole.log(square3.dueDate+ \"due date\")\n\n//# sourceURL=webpack://todolist/./src/items.js?");

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