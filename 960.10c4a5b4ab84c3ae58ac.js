"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[960],{

/***/ 778
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(928);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    const popularTechs = ['chrome', 'telegram', 'excel', 'sheets', 'facebook'];
    const pathName = window.location.pathname.slice(1);
    const isProjectsPage = pathName === 'projects';

    return /*html*/`
        <div class="path">
            <div class="path__content">
                <div class="path__info">
                    <h1 class="h1 path__name">${pathName}</h1>
                    <p class="path__description">${description}</p>
                </div>
                ${isProjectsPage ? `
                <div class="filter-bar">
                    <div class="filter-bar__search">
                        <input type="text" placeholder="Search projects..." class="filter-bar__input">
                        <div class="filter-bar__dropdown">
                            <div class="filter-bar__dropdown-content">
                                ${popularTechs.map(tech => `
                                    <div class="filter-category">
                                        <span class="filter-category__label">${_consts_techs__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[tech]}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                ` : ""}
            </div>
        </div>
    `
});


/***/ },

/***/ 960
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    return /*html*/ `${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ description: t.description })}`;
});


/***/ }

}]);