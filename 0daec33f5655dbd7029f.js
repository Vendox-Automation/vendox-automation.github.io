"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Home_js"],{

/***/ "./src/app/blocks/home/About.js"
/*!**************************************!*\
  !*** ./src/app/blocks/home/About.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <section class=\"about\">\n            <div class=\"about__content\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <div class=\"about__text\">\n                    ${t.description.map(\n        (text) =>\n                            /*html*/ `<p class=\"about__description\">${text}</p>`\n    ).join(\"\")}\n                </div>\n\n\n            </div>\n            <img src=\"/images/about-me.png\" alt=\"\" class=\"about__image\">\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/About.js?\n}");

/***/ },

/***/ "./src/app/blocks/home/Contacts.js"
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Contacts.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\nconst contacts = [\n    {\n        name: \"discord\",\n        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].discordTag,\n    },\n    {\n        name: \"email\",\n        text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emailRaw,\n    }\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <section class=\"contacts\" id=\"contacts\">\n            <h2 class=\"h2\">${t.title}</h2>\n            <div class=\"contacts__content\">\n                <p class=\"contacts__description\">${t.text}</p>\n                <div class=\"contacts__media\">\n                    <h3 class=\"contacts__title\">${t.media}</h3>\n                    <div class=\"contacts__list\">\n                        ${contacts\n            .map(\n                (contact) => /*html*/ `\n                            <a class=\"contact\" href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"][contact.name]}\">\n                                <img src=\"/images/icons/${contact.name\n                    }.svg\" alt=\"\">\n                                <div class=\"contact__name\">${contact.text}</div>\n                            </a>\n                        `\n            )\n            .join(\"\")}\n                    </div>\n                </div>\n            </div>\n\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Contacts.js?\n}");

/***/ },

/***/ "./src/app/blocks/home/Hero.js"
/*!*************************************!*\
  !*** ./src/app/blocks/home/Hero.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <section class=\"hero\">\n            <div class=\"hero__content\">\n                <h1 class=\"hero__title\">${t.title}</h1>\n                <div class=\"hero__description\">${t.description}</div>\n                <a class=\"button button__primary\" href=\"#contacts\">${t.button} =></a>\n            </div>\n            <div class=\"hero__illustrations\">\n                <img src=\"/images/hero.png\" alt=\"vendox-automation\" class=\"hero__image\">\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Hero.js?\n}");

/***/ },

/***/ "./src/app/blocks/home/Projects.js"
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Projects.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ProjectList */ \"./src/app/components/ProjectList.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        <section class=\"projects\">\n            <div class=\"projects__header\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <a class=\"projects__link\" href=\"/projects\">${t.button} ~~></a>\n            </div>\n            ${(0,_components_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ limit: 3 }, t2)}\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/Projects.js?\n}");

/***/ },

/***/ "./src/app/blocks/home/TrustBadges.js"
/*!********************************************!*\
  !*** ./src/app/blocks/home/TrustBadges.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    const badges = [\n        { icon: '🚀', title: 'Fast Integration', desc: 'Seamlessly connects with your existing workflow' },\n        { icon: '🎯', title: '99% Accuracy', desc: 'Precision-engineered automation scripts' },\n        { icon: '🛠️', title: '24/7 Monitoring', desc: 'Active surveillance of all automated tasks' },\n        { icon: '💎', title: 'Premium Quality', desc: 'Clean, maintainable, and scalable code' }\n    ];\n\n    return /*html*/`\n        <section class=\"trust-badges container\">\n            <div class=\"trust-badges__list\">\n                ${badges.map(badge => `\n                    <div class=\"trust-badge\">\n                        <div class=\"trust-badge__icon\">${badge.icon}</div>\n                        <div class=\"trust-badge__content\">\n                            <div class=\"trust-badge__title\">${badge.title}</div>\n                            <div class=\"trust-badge__desc\">${badge.desc}</div>\n                        </div>\n                    </div>\n                `).join('')}\n            </div>\n        </section>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/blocks/home/TrustBadges.js?\n}");

/***/ },

/***/ "./src/app/components/Project.js"
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n    function map(link) {\n        let href =\n            \"https://\" + (link === \"live\" ? \"\" : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link];\n\n        if (link === \"figma\") href = `https://figma.com/community/file/${links[link]}`\n        if (link === \"github\" && links[link].startsWith(\"/\")) href = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\n\n\n        const className = link === \"cached\" ? \"button__secondary\" : \"\";\n        const name = `${link[0].toUpperCase()}${link.slice(1)}`;\n\n        return /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} =></a>`;\n    }\n\n    return Object.keys(links).map(map).join(\"\");\n}\n\nconst techIconMap = {\n    ts: \"typescript/typescript-original\",\n    js: \"javascript/javascript-original\",\n    python: \"python/python-original\",\n    sqlite: \"sqlite/sqlite-original\",\n    mongo: \"mongodb/mongodb-original\",\n    postgreSql: \"postgresql/postgresql-original\",\n    html: \"html5/html5-original\",\n    css: \"css3/css3-original\",\n    sass: \"sass/sass-original\",\n    scss: \"sass/sass-original\",\n    less: \"less/less-plain-wordmark\",\n    stylus: \"stylus/stylus-original\",\n    ejs: \"javascript/javascript-original\",\n    jinja: \"python/python-original\",\n    node: \"nodejs/nodejs-original\",\n    vscode: \"vscode/vscode-original\",\n    nvim: \"neovim/neovim-original\",\n    figma: \"figma/figma-original\",\n    git: \"git/git-original\",\n    react: \"react/react-original\",\n    discordJs: \"javascript/javascript-original\",\n    flask: \"flask/flask-original\",\n    express: \"express/express-original\",\n    rtk: \"react/react-original\",\n    zod: \"typescript/typescript-original\",\n    webpack: \"webpack/webpack-original\",\n    pug: \"javascript/javascript-original\",\n    gulp: \"gulp/gulp-plain\",\n    next: \"nextjs/nextjs-original\",\n    deno: \"denojs/denojs-original\",\n    tailwind: \"tailwindcss/tailwindcss-original\",\n    selenium: \"selenium/selenium-original\",\n    excel: \"microsoft/microsoft-original\",\n    sheets: \"google/google-original\",\n    facebook: \"facebook/facebook-original\",\n};\n\n\nconst customIcons = {\n    excel: \"https://img.icons8.com/color/48/microsoft-excel-2019.png\",\n    sheets: \"https://img.icons8.com/color/48/google-sheets.png\",\n    selenium: \"https://skillicons.dev/icons?i=selenium\",\n    facebook: \"https://img.icons8.com/color/48/facebook-new.png\",\n    onesignal: \"https://play-lh.googleusercontent.com/hI34BLUTp8l-oPdHHsTYSu44sWG-0N7xMmfTbldFUjb8tI0LSDoahrHQiXYjlLHIHTI\",\n    chrome: \"https://cdn-icons-png.flaticon.com/512/732/732205.png\",\n    telegram: \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/960px-Telegram_logo.svg.png\",\n};\n\n\n\nfunction getTechIcon(tech) {\n    if (customIcons[tech]) return customIcons[tech];\n\n    const icon = techIconMap[tech];\n    if (icon) {\n        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;\n    }\n    return null;\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n    const project = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((p) => p.id === id);\n    const { techs: projectTech, status, kpi } = project;\n\n    return /*html*/ `\n        <div class=\"project\" data-techs=\"${projectTech.join(',').toLowerCase()}\" data-name=\"${t[id].name.toLowerCase()}\">\n\n            <div class=\"project__content\">\n                <div class=\"project__header\">\n                    <a href=\"/project/${id}\" class=\"project__name\">${t[id].name}</a>\n                    <div class=\"project__tech-logos\">\n                        ${projectTech\n            .map((tech) => {\n                const iconUrl = getTechIcon(tech);\n                if (!iconUrl) return \"\";\n                return /*html*/ `<img class=\"project__tech-logo\" src=\"${iconUrl}\" title=\"${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}\" alt=\"${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}\">`;\n            })\n            .join(\"\")}\n                    </div>\n                </div>\n                ${kpi ? `<div class=\"project__kpi\">${kpi}</div>` : \"\"}\n                <div class=\"project__description\">${t[id].description}</div>\n            </div>\n        </div> \n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?\n}");

/***/ },

/***/ "./src/app/components/ProjectList.js"
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?\n}");

/***/ },

/***/ "./src/app/consts/projects.js"
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n    {\n        id: \"angkasa\",\n        status: \"AUTOMATED\",\n        techs: [\"excel\", \"sheets\"],\n        links: {},\n        stats: { manual: 210, automated: 7 }\n    },\n    {\n        id: \"onesignal-subs-scraper\",\n        status: \"AUTOMATED\",\n        techs: [\"onesignal\", \"sheets\"],\n        links: { github: \"https://github.com/vendox-automation\" },\n        stats: { manual: 17, automated: 14 }\n    },\n    {\n        id: \"onesignal-domain-inserter\",\n        status: \"AUTOMATED\",\n        techs: [\"onesignal\", \"sheets\"],\n        links: {},\n        stats: { manual: 180, automated: 90 }\n    },\n    {\n        id: \"stamplist\",\n        status: \"AUTOMATED\",\n        techs: [\"sheets\", \"chrome\", \"telegram\"],\n        links: {},\n        stats: { manual: 18000, automated: 68 }\n    },\n    {\n        id: \"game-arrangement\",\n        status: \"AUTOMATED\",\n        techs: [\"chrome\", \"telegram\"],\n        links: {},\n        stats: { manual: 600, automated: 4 }\n    },\n    {\n        id: \"payment-gateway-checker\",\n        status: \"AUTOMATED\",\n        techs: [\"chrome\", \"telegram\"],\n        links: {},\n        stats: { manual: 15, automated: 1.5 }\n    },\n    {\n        id: \"vip-file-updater\",\n        status: \"AUTOMATED\",\n        techs: [\"excel\", \"sheets\"],\n        links: {},\n        stats: { manual: 30, automated: 5 }\n    },\n    {\n        id: \"account-reconcilator\",\n        status: \"AUTOMATED\",\n        techs: [\"sheets\", \"telegram\"],\n        links: {},\n        stats: { manual: 15, automated: 5 }\n    },\n    {\n        id: \"manual-banking\",\n        status: \"AUTOMATED\",\n        techs: [\"excel\", \"sheets\", \"chrome\"],\n        links: {},\n        stats: { manual: 10, automated: 0.4 }\n    },\n    {\n        id: \"predictive-dialer-uploader\",\n        status: \"AUTOMATED\",\n        techs: [\"excel\", \"sheets\"],\n        links: {},\n        stats: { manual: 60, automated: 16 }\n    },\n    {\n        id: \"broadcast-dialer-uploader\",\n        status: \"AUTOMATED\",\n        techs: [\"excel\", \"sheets\"],\n        links: {},\n        stats: { manual: 30, automated: 7 }\n    },\n    {\n        id: \"facebook-comment-scraper\",\n        status: \"AUTOMATED\",\n        techs: [\"facebook\", \"sheets\", \"telegram\"],\n        links: { github: \"https://github.com/vendox-automation\" },\n        stats: { manual: 660, automated: 78 }\n    }\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?\n}");

/***/ },

/***/ "./src/app/views/Home.js"
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/home/Hero.js */ \"./src/app/blocks/home/Hero.js\");\n/* harmony import */ var _blocks_home_TrustBadges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/home/TrustBadges.js */ \"./src/app/blocks/home/TrustBadges.js\");\n/* harmony import */ var _blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/home/Projects.js */ \"./src/app/blocks/home/Projects.js\");\n/* harmony import */ var _blocks_home_About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/home/About.js */ \"./src/app/blocks/home/About.js\");\n/* harmony import */ var _blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/blocks/home/Contacts.js */ \"./src/app/blocks/home/Contacts.js\");\n/* harmony import */ var styles_pages_home_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/pages/home.sass */ \"./src/assets/styles/pages/home.sass\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n    return /*html*/`\n        <div class=\"section-reveal\">${(0,_blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.hero)}</div>\n        <div class=\"section-reveal\">${(0,_blocks_home_TrustBadges_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}</div>\n        <div class=\"section-reveal\">${(0,_blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t.projects, locale.projects)}</div>\n        <div class=\"section-reveal\">${(0,_blocks_home_About_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.about)}</div>\n        <div class=\"section-reveal\">${(0,_blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t.contacts)}</div>\n    `;\n});\n\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Home.js?\n}");

/***/ },

/***/ "./src/assets/styles/pages/home.sass"
/*!*******************************************!*\
  !*** ./src/assets/styles/pages/home.sass ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/home.sass?\n}");

/***/ }

}]);