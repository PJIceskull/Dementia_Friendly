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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n// Import\r\n\r\n\r\nfunction initListeners() {}\r\n\r\nfunction initURLListener() {\r\n  $(window).on(\"hashChange\", _model_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute);\r\n  (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute)();\r\n}\r\n\r\n$(document).ready(function () {\r\n  initURLListener();\r\n  initListeners();\r\n});\r\n\n\n//# sourceURL=webpack://dementia_friendly/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeRoute: () => (/* binding */ changeRoute)\n/* harmony export */ });\nfunction changeRoute() {\r\n  let hashTag = window.location.hash;\r\n  let pageID = hashTag.replace(\"#\", \"\");\r\n  //   console.log(hashTag + ' ' + pageID);\r\n  // Step 1: Access the current URL\r\n  //   let currentURL = window.location.href;\r\n\r\n  //   // Step 2: Check if there is a hash\r\n  //   if (window.location.hash) {\r\n  //     // Step 3: Remove the hash\r\n  //     window.history.pushState(\"\", document.title, currentURL.split(\"#\")[0]);\r\n  //   }\r\n\r\n  // Scroll to Top of the Page\r\n  scroll(0, 0);\r\n\r\n  if (pageID != \"\") {\r\n    $.get(`pages/${pageID}.html`, function (data) {\r\n      console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    });\r\n  } else {\r\n    $.get(`pages/home.html`, function (data) {\r\n      // console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://dementia_friendly/./src/model.js?");

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