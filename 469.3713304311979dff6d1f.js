"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[469],{

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

/***/ 469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {
    const contactTexts = t;
    const formTexts = contactTexts.form;

    return /*html*/ `
        <div class="contact-page">
            <div class="container container--split">
                <div class="contact-text-side">
                    <div class="contact-badge stagger-1">${contactTexts.title}</div>
                    <h1 class="contact-title stagger-2">${contactTexts.subtitle}</h1>
                    <h2 class="contact-action stagger-3">${contactTexts.action}</h2>
                    <p class="contact-description stagger-4">${contactTexts.description}</p>
                </div>
                
                <div class="contact-form-side stagger-6">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">${formTexts.name}</label>
                            <input type="text" id="name" name="name" placeholder="${formTexts.name_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="company">${formTexts.company}</label>
                            <input type="text" id="company" name="company" placeholder="${formTexts.company_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">${formTexts.email}</label>
                            <input type="email" id="email" name="email" placeholder="${formTexts.email_placeholder}" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">${formTexts.phone}</label>
                            <input type="tel" id="phone" name="phone" placeholder="${formTexts.phone_placeholder}">
                        </div>

                        <div class="form-group">
                            <label for="subject">${formTexts.subject}</label>
                            <input type="text" id="subject" name="subject" placeholder="${formTexts.subject_placeholder}" required>
                        </div>

                        <div class="form-group">
                            <label for="message">${formTexts.message}</label>
                            <textarea id="message" name="message" placeholder="${formTexts.message_placeholder}" required rows="4"></textarea>
                        </div>

                        <div class="form-footer">
                            <button type="submit" class="button button--submit button__primary">
                                <span class="button-text">${formTexts.submit}</span>
                                <span class="button-loader" style="display: none;">Sending...</span>
                                <span class="button-success" style="display: none;">Sent Successfully!</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
});


/***/ }

}]);