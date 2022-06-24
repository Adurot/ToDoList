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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trick\": () => (/* binding */ trick)\n/* harmony export */ });\n/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ \"./src/items.js\");\n\n//import {trick} from './magic.js'\n\n\n// Item attributes: title, description, dateAssigned, extraDays, priority, index, list\n\n\n\nlet i = 0;\nlet j = 0;\nlet taskTime = 540;\nlet btnDue = [];\nlet btnMinus = [];\nlet btnHigh = [];\nlet btnMed = [];\nlet btnLow = [];\nconst today = new Date();\nconst due = new Date();\ndue.setDate(today.getDate() + taskTime);\nconst day = due.getDate();\nconst month = due.getMonth() + 1;\nconst year = due.getFullYear();\nconst toDo = [];\n\nfunction dateAssigned(origDate, extraDays) {\n    const due = new Date();\n    due.setDate(origDate.getDate() + extraDays);\n    const day = due.getDate();\n    const month = due.getMonth() + 1;\n    const year = due.getFullYear();\n    return month + '/' + day + '/' + year\n}\n\n\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(\"Task Title\", \"Task Description\", new Date(), 0, 'High', i, 'default');\n\ni++;\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, due, new Date(), 3, 'Medium', i, 'default');\ni++;\ntoDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, new Date(), 2, 'Low', i, 'work');\ni++;\n//console.log(toDo[i].priority + \" Due Date for \" + i)\nlet listType = 'default';\n\nlet btn = document.createElement(\"button\");\nlet btnFin = [];\nbtn.innerHTML = \"Default\";\nbtn.onclick = function () {\n    listType = 'default';\n    clrList();\n    chooseList(listType);\n\n};\ndocument.body.appendChild(btn);\n\nlet btnWork = document.createElement(\"button\");\nbtnWork.innerHTML = \"Work\";\nbtnWork.onclick = function () {\n    listType = 'work';\n    clrList();\n    chooseList(listType);\n\n};\ndocument.body.appendChild(btnWork);\n\nlet btnChores = document.createElement(\"button\");\nbtnChores.innerHTML = \"Chores\";\nbtnChores.onclick = function () {\n    listType = 'chores';\n    clrList();\n    chooseList(listType);\n\n};\ndocument.body.appendChild(btnChores);\n\nlet btnFinished = document.createElement(\"button\");\nbtnFinished.innerHTML = \"Finished\";\nbtnFinished.onclick = function () {\n    listType = 'finished';\n    clrList();\n    chooseList(listType);\n\n};\ndocument.body.appendChild(btnFinished);\n\nlet btnNewList = document.createElement(\"button\");\nbtnNewList.innerHTML = \"New List\";\nbtnNewList.onclick = function () {\n    let btnFinished = document.createElement(\"button\");\n    btnFinished.innerHTML = \"Custom\";\n    btnFinished.onclick = function () {\n        listType = 'finished';\n        clrList();\n        chooseList(listType);\n\n    };\n    document.body.appendChild(btnFinished);\n};\ndocument.body.appendChild(btnNewList);\n\n\nfunction clrList() {\n    let element = document.getElementById(\"container\");\n    while (element.firstChild) {\n        element.removeChild(element.firstChild);\n    }\n}\nfunction pageLoad() {\n\n    let divt = document.createElement(\"div\");\n    divt.id = \"dtitle\";\n    divt.className = \"title\";\n    divt.style = \"background-color: blue;\";\n    divt.style.width = \"1200px\";\n    divt.style.height = \"120px\";\n    divt.innerHTML = \"Version 1\";\n    document.body.appendChild(divt);\n\n\n    let h1 = document.createElement(\"h1\");\n\n    h1.id = \"title\";\n\n    h1.style.width = \"500px\";\n    h1.style.height = \"20px\";\n    h1.innerHTML = \"To Do List <br>\";\n    document.getElementById(\"dtitle\").appendChild(h1);\n\n    let container = document.createElement(\"div\");\n    container.id = \"container\";\n    document.body.appendChild(container);\n\n\n    let btnAddToDo = document.createElement(\"button\");\n    btnAddToDo.innerHTML = \"Add a Task\";\n    btnAddToDo.onclick = function () {\n        var name = prompt(\"Name of new task?\");\n        var description = prompt(\"Description (optional)\");\n        toDo[i] = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(name, description, new Date(), 0, 'Medium', i, listType);\n\n        i++;\n        clrList();\n        chooseList(listType);\n\n    };\n    document.getElementById(h1.id).appendChild(btnAddToDo);\n}\n\n\n\nfunction listLoad() {\n\n\n    let div = document.createElement(\"div\");\n    div.id = \"div\" + toDo[j].index;\n    div.className = \"toDo\";\n    div.style = \"background-color: yellow;\";\n    div.style.width = \"1200px\";\n    div.style.height = \"400px\";\n    document.getElementById(\"container\").appendChild(div);\n\n    let h3 = document.createElement(\"h4\");\n\n    h3.id = toDo[j].index;\n\n\n\n    h3.style.width = \"300px\";\n    h3.style.height = \"50px\";\n    h3.innerHTML = \"<span>Item number</span> <br>\" + toDo[j].index + \"<br> <span><u>Title</u></span><br>\" + toDo[j].title;\n    document.getElementById(\"div\" + toDo[j].index).appendChild(h3);\n    h3.style = \"background-color: lightgreen;\";\n\n    btnFin[h3.id] = document.createElement(\"button\");\n    btnFin[h3.id].innerHTML = \"Mark as Finished\";\n    btnFin[h3.id].onclick = function () {\n        toDo[h3.id].list = \"finished\";\n\n        clrList();\n        chooseList(listType);\n\n    };\n    document.getElementById(h3.id).appendChild(btnFin[h3.id]);\n\n\n    let h4 = document.createElement(\"h4\");\n    h4.id = \"description\" + toDo[j].index;\n\n    h4.style.width = \"300px\";\n    h4.style.height = \"50px\";\n    h4.innerHTML = \"<br> <span>Description</span> <br>\" + toDo[j].description;\n    document.getElementById(\"div\" + toDo[j].index).appendChild(h4);\n\n    let hDue = document.createElement(\"h4\");\n\n    hDue.id = \"hDue\" + toDo[j].index;\n\n    hDue.style.width = \"300px\";\n    hDue.style.height = \"50px\";\n    hDue.innerHTML = \"<br> <span>Due Date</span><br>\" + dateAssigned(toDo[j].dateAssigned, toDo[j].extraDays);\n    document.getElementById(\"div\" + toDo[j].index).appendChild(hDue);\n    //adds time to due date\n    btnDue[j] = document.createElement(\"button\");\n    btnDue[j].innerHTML = \"Add a Day\";\n\n    btnDue[j].addEventListener('click', () => {\n        // When there is a \"click\"\n        // it shows an alert in the browser\n\n        toDo[h3.id].extraDays++;\n\n\n        clrList();\n        chooseList(listType);\n\n    });\n    document.getElementById(\"hDue\" + toDo[j].index).appendChild(btnDue[j]);\n\n    btnMinus[j] = document.createElement(\"button\");\n    btnMinus[j].innerHTML = \"Subtract a Day\";\n\n    btnMinus[j].addEventListener('click', () => {\n        // When there is a \"click\"\n        // it shows an alert in the browser\n\n        toDo[h3.id].extraDays--;\n\n\n        clrList();\n        chooseList(listType);\n\n    });\n    document.getElementById(\"hDue\" + toDo[j].index).appendChild(btnMinus[j]);\n\n    function addDays() {\n        alert(toDo[j].extraDays)\n    }\n\n\n    let hpriority = document.createElement(\"h4\");\n    hpriority.id = \"<span>description</span><br>\" + toDo[j].index;\n\n    hpriority.style.width = \"300px\";\n    hpriority.style.height = \"50px\";\n    hpriority.innerHTML = \"<br> <span>Priority</span><br>\" + toDo[j].priority + \"<br>\";\n    document.getElementById(\"div\" + toDo[j].index).appendChild(hpriority);\n\n    btnHigh[j] = document.createElement(\"button\");\n    btnHigh[j].innerHTML = \"High\";\n\n    btnHigh[j].addEventListener('click', () => {\n        // When there is a \"click\"\n        // it shows an alert in the browser\n\n        toDo[h3.id].priority = 'High';\n\n\n        clrList();\n        chooseList(listType);\n\n    });\n    document.getElementById(\"<span>description</span><br>\" + toDo[j].index).appendChild(btnHigh[j]);\n\n    btnMed[j] = document.createElement(\"button\");\n    btnMed[j].innerHTML = \"Medium\";\n\n    btnMed[j].addEventListener('click', () => {\n        // When there is a \"click\"\n        // it shows an alert in the browser\n\n        toDo[h3.id].priority = 'Medium';\n\n\n        clrList();\n        chooseList(listType);\n\n    });\n    document.getElementById(\"<span>description</span><br>\" + toDo[j].index).appendChild(btnMed[j]);\n\n    btnLow[j] = document.createElement(\"button\");\n    btnLow[j].innerHTML = \"Low\";\n\n    btnLow[j].addEventListener('click', () => {\n        // When there is a \"click\"\n        // it shows an alert in the browser\n\n        toDo[h3.id].priority = 'Low';\n\n\n        clrList();\n        chooseList(listType);\n\n    });\n    document.getElementById(\"<span>description</span><br>\" + toDo[j].index).appendChild(btnLow[j]);\n\n\n    let hlist = document.createElement(\"h4\");\n    hlist.id = \"description\" + toDo[j].index;\n\n    hlist.style.width = \"300px\";\n    hlist.style.height = \"50px\";\n    hlist.innerHTML = \"<br> <span>List</span> for number \" + toDo[j].index + \" To Do is \" + toDo[j].list;\n    document.getElementById(\"div\" + toDo[j].index).appendChild(hlist);\n\n}\n\npageLoad();\nchooseList('default');\n\nfunction chooseList(listType) {\n    for (j = 0; j < toDo.length; j++) {\n        if (toDo[j].list == listType) { listLoad(); }\n    }\n\n}\n\nlet place = \"spacestation\";\n\nconsole.log(\"test working\")\n\n\n\n\n\n\n\n\nconst square3 = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10, 9, 8, 12, 100, 5);\n\nconsole.log(square3.area + \"square 3 area\"); // 100\n\nconsole.log(square3.dateAssigned + \"due date\")\n\n\nconst square = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(10, 10);\n\nconsole.log(square.area); // 100\n\n\n\n\n\n\nconst jim = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(5, 10, 9, 12, 6, 5);\nconsole.log(\"check1\")\n\nconst jim1 = new _items_js__WEBPACK_IMPORTED_MODULE_0__.item(7, 12, 15, 4, 7, 23);\n\n\nvar personActions = {\n    getFullName() {\n        return this.firstName + ' ' + this.lastName;\n    },\n};\n\nconsole.log(jim.area);\n\nconst trick = function () {\n    return {\n        trick: () => { console.log(harry[1].firstName + 'I am doing a trick'); }\n    }\n}\n\nconst eat = function () {\n    return {\n        eat: () => { console.log(place + ' I am eating'); }\n    }\n}\nconst breathe = function () {\n    return {\n        breathe: () => { harry[1].firstName = \"billy\" }\n    }\n}\nconst swim = function () {\n    return {\n        swim: () => { console.log('I am swimming'); }\n    }\n}\n\n\n\n\nconst crazyName = function () {\n    return {\n        crazyName: () => { console.log(harry[1].getName + ' I am doing a trick'); }\n    }\n}\n\nconst crazyName1 = function () {\n    return {\n        crazyName1: () => { console.log(harry[1].getName + ' I am doing a trick'); }\n    }\n}\n\nfunction chName(namo) {\n    harry[1].firstName = namo;\n\n}\n\n/**const chName1= function () {\n    return{\n        chName1: () => {console.log(harry[1].firstName+ \"hello\");\n    }\n}*/\n\nconst superMagician = () => {\n    return Object.assign(\n        {\n            firstName: 'Monica',\n            set changeName(newName) {\n                this.firstName = newName;\n            }\n        },\n\n\n        eat(),\n        breathe(),\n        trick()\n    );\n}\nconst noviceMagician = () => {\n    return Object.assign(\n        {\n            firstName: 'Jake',\n            set changeName(newName) {\n                this.firstName = newName;\n            },\n            get getName() {\n                return this.firstName;\n            }\n        },\n\n        crazyName(),\n        crazyName1(),\n        eat(),\n        breathe(),\n        swim()\n    );\n}\n\nlet harry = superMagician();\n\nharry.eat();\n\nconsole.log(harry.firstName)\n\nharry[0] = noviceMagician();\nharry.changeName = \"17\";\n\nconsole.log(harry[0].firstName)\n\nconsole.log(harry.firstName)\n\nharry[1] = noviceMagician();\n\nharry[1].changeName = \"Stationcraft\";\n\nharry[1].eat();\n\nharry[1].crazyName();\n\nharry[1].crazyName1();\n\nconsole.log(harry[1].firstName)\n\nharry[1].speak;\n\nharry[1].changeName = \"kip\"\n\n//harry[1].chName1;\n\nconsole.log(harry[1].firstName)\n\nharry.trick();\n\nharry.breathe();\nconsole.log(harry[1].firstName)\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"item\": () => (/* binding */ item)\n/* harmony export */ });\n\n\nclass item {\n    constructor(title, description, dateAssigned, extraDays, priority, index, list) {\n        this.title=title;\n        this.description= description;\n        this.dateAssigned=dateAssigned;\n        this.extraDays=extraDays;\n        this.priority=priority;\n        this.index=index;\n        this.list=list; //which list this belongs to.\n    }\n    // Getter\n    get area() {\n        return this.calcArea();\n    }\n    // Method\n    calcArea() {\n        return this.height * this.width;\n    }\n}\n\n\nfunction calcArea(height, width) {\n    return width*height;\n\n}\n\nconst square = new item(10, 10, 9, 8, 12, 6, 5, 'default');\n\nconsole.log(square.area); // 100\n\n\nconst square3 = new item(10, 10, 9, 8, 12, 100, 5, 'default');\n\n\n\nconsole.log(square3.area+ \"square 3 area\"); // 100\n\nconsole.log(square3.dateAssigned+ \"due date\")\n\n//# sourceURL=webpack://todolist/./src/items.js?");

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