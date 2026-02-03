"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Contacts_js"],{

/***/ "./src/app/components/Path.js"
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    const popularTechs = ['chrome', 'telegram', 'excel', 'sheets', 'facebook'];\n    const pathName = window.location.pathname.slice(1);\n    const isProjectsPage = pathName === 'projects';\n\n    return /*html*/`\n        <div class=\"path\">\n            <div class=\"path__content\">\n                <div class=\"path__info\">\n                    <h1 class=\"h1 path__name\">${pathName}</h1>\n                    <p class=\"path__description\">${description}</p>\n                </div>\n                ${isProjectsPage ? `\n                <div class=\"filter-bar\">\n                    <div class=\"filter-bar__search\">\n                        <input type=\"text\" placeholder=\"Search projects...\" class=\"filter-bar__input\">\n                        <div class=\"filter-bar__dropdown\">\n                            <div class=\"filter-bar__dropdown-content\">\n                                ${popularTechs.map(tech => `\n                                    <div class=\"filter-category\">\n                                        <span class=\"filter-category__label\">${_consts_techs__WEBPACK_IMPORTED_MODULE_0__[\"default\"][tech]}</span>\n                                    </div>\n                                `).join('')}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ` : \"\"}\n            </div>\n        </div>\n    `\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?\n}");

/***/ },

/***/ "./src/app/views/Contacts.js"
/*!***********************************!*\
  !*** ./src/app/views/Contacts.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}`;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Contacts.js?\n}");

/***/ }

}]);