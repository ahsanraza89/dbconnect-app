"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(instrument)/./app/db/db.js":
/*!**********************!*\
  !*** ./app/db/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectIt: () => (/* binding */ connectIt)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction connectIt() {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://127.0.0.1:27017/userAuthentication\").then((connection)=>{\n        console.log(connection);\n        console.log(\"db connected ho gai ha \");\n    }).catch((error)=>{\n        console.error(\"Error connecting to DB:\", error);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vYXBwL2RiL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixTQUFTQztJQUNaRCx1REFBZ0IsQ0FBQyxnREFBZ0RHLElBQUksQ0FBQyxDQUFDQztRQUNuRUMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaQyxRQUFRQyxHQUFHLENBQUM7SUFJaEIsR0FBS0MsS0FBSyxDQUFDLENBQUNDO1FBQ1JILFFBQVFHLEtBQUssQ0FBQywyQkFBMkJBO0lBQzdDO0FBQ0oiLCJzb3VyY2VzIjpbIkQ6XFxJbnRlcm5zaGlwXFxUQVNLXFxkYi1hcHBcXGFwcFxcZGJcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0SXQoKXtcclxuICAgIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L3VzZXJBdXRoZW50aWNhdGlvblwiKS50aGVuKChjb25uZWN0aW9uKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0ZWQgaG8gZ2FpIGhhIFwiKTtcclxuICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSkgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBEQjpcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdEl0IiwiY29ubmVjdCIsInRoZW4iLCJjb25uZWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./app/db/db.js\n");

/***/ }),

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _app_db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/db/db */ \"(instrument)/./app/db/db.js\");\n\nfunction register() {\n    (0,_app_db_db__WEBPACK_IMPORTED_MODULE_0__.connectIt)();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRWxDLFNBQVNDO0lBRVpELHFEQUFTQTtBQUdiIiwic291cmNlcyI6WyJEOlxcSW50ZXJuc2hpcFxcVEFTS1xcZGItYXBwXFxpbnN0cnVtZW50YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7IGNvbm5lY3RJdCB9IGZyb20gXCIuL2FwcC9kYi9kYlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyICgpe1xyXG4gICBcclxuICAgIGNvbm5lY3RJdCgpO1xyXG4gICBcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbImNvbm5lY3RJdCIsInJlZ2lzdGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
module.exports = __webpack_exports__;

})();