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

/***/ "./src/js/contractors.js":
/*!*******************************!*\
  !*** ./src/js/contractors.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contractorsList\": () => (/* binding */ contractorsList)\n/* harmony export */ });\nvar contractorsList = document.querySelector(\"tbody\");\nvar contractors = [{\n  id: \"1\",\n  name: \"John Doe\",\n  email: \"john.doe@tuzimbe.com\",\n  age: \"45\",\n  sex: \"Female\",\n  role: \"Manager\"\n}, {\n  id: \"2\",\n  name: \"Blue Sky\",\n  email: \"blue.sky@tuzimbe.com\",\n  age: \"18\",\n  sex: \"Male\",\n  role: \"Porter\"\n}, {\n  id: \"3\",\n  name: \"Green Beans\",\n  email: \"green.beans@tuzimbe.com\",\n  age: \"28\",\n  sex: \"Female\",\n  role: \"Carpenter\"\n}, {\n  id: \"4\",\n  name: \"Apple Tree\",\n  email: \"apple.tree@tuzibe.com\",\n  age: \"30\",\n  sex: \"Male\",\n  role: \"Builder\"\n}, {\n  id: \"5\",\n  name: \"Qwerty Asdfg\",\n  email: \"qwerty@tuzimbe.com\",\n  age: \"25\",\n  sex: \"Female\",\n  role: \"Carpenter\"\n}, {\n  id: \"6\",\n  name: \"May Flower\",\n  email: \"may.flower@tuzimbe.com\",\n  age: \"34\",\n  sex: \"Male\",\n  role: \"Porter\"\n}];\ncontractors.forEach(function (contractor) {\n  contractorsList.innerHTML += \"<tr>\\n      <td>\".concat(contractor.id, \"</td>\\n      <td>\").concat(contractor.name, \"</td>\\n      <td>\").concat(contractor.email, \"</td>\\n      <td>\").concat(contractor.age, \"</td>\\n      <td>\").concat(contractor.sex, \"</td>\\n      <td>\").concat(contractor.role, \"</td>\\n      <td>\\n        <button class=\\\"btn btn-outline-success\\\">View Details</button>\\n      </td>\\n    </tr>\\n  \");\n});\n\n//# sourceURL=webpack://tuzimbe-templates/./src/js/contractors.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contractors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contractors */ \"./src/js/contractors.js\");\n\n\n//# sourceURL=webpack://tuzimbe-templates/./src/js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;