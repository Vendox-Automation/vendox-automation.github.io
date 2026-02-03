"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

/***/ 340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

// EXTERNAL MODULE: ./src/app/consts/projects.js
var projects = __webpack_require__(635);
// EXTERNAL MODULE: ./src/app/consts/websites.js
var consts_websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var consts_media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href =
            "https://" + (link === "live" ? "" : websites[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media.github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

const techIconMap = {
    ts: "typescript/typescript-original",
    js: "javascript/javascript-original",
    python: "python/python-original",
    sqlite: "sqlite/sqlite-original",
    mongo: "mongodb/mongodb-original",
    postgreSql: "postgresql/postgresql-original",
    html: "html5/html5-original",
    css: "css3/css3-original",
    sass: "sass/sass-original",
    scss: "sass/sass-original",
    less: "less/less-plain-wordmark",
    stylus: "stylus/stylus-original",
    ejs: "javascript/javascript-original",
    jinja: "python/python-original",
    node: "nodejs/nodejs-original",
    vscode: "vscode/vscode-original",
    nvim: "neovim/neovim-original",
    figma: "figma/figma-original",
    git: "git/git-original",
    react: "react/react-original",
    discordJs: "javascript/javascript-original",
    flask: "flask/flask-original",
    express: "express/express-original",
    rtk: "react/react-original",
    zod: "typescript/typescript-original",
    webpack: "webpack/webpack-original",
    pug: "javascript/javascript-original",
    gulp: "gulp/gulp-plain",
    next: "nextjs/nextjs-original",
    deno: "denojs/denojs-original",
    tailwind: "tailwindcss/tailwindcss-original",
    selenium: "selenium/selenium-original",
    excel: "microsoft/microsoft-original",
    sheets: "google/google-original",
    facebook: "facebook/facebook-original",
};


const customIcons = {
    excel: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
    sheets: "https://img.icons8.com/color/48/google-sheets.png",
    selenium: "https://skillicons.dev/icons?i=selenium",
    facebook: "https://img.icons8.com/color/48/facebook-new.png",
    onesignal: "https://play-lh.googleusercontent.com/hI34BLUTp8l-oPdHHsTYSu44sWG-0N7xMmfTbldFUjb8tI0LSDoahrHQiXYjlLHIHTI",
    chrome: "https://cdn-icons-png.flaticon.com/512/732/732205.png",
    telegram: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/960px-Telegram_logo.svg.png",
};



function getTechIcon(tech) {
    if (customIcons[tech]) return customIcons[tech];

    const icon = techIconMap[tech];
    if (icon) {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
    }
    return null;
}


/* harmony default export */ const Project = (({ id }, t) => {
    const project = projects/* default */.A.find((p) => p.id === id);
    const { techs: projectTech, status, kpi } = project;

    return /*html*/ `
        <div class="project" data-techs="${projectTech.join(',').toLowerCase()}" data-name="${t[id].name.toLowerCase()}">

            <div class="project__content">
                <div class="project__header">
                    <a href="/project/${id}" class="project__name">${t[id].name}</a>
                    <div class="project__tech-logos">
                        ${projectTech
            .map((tech) => {
                const iconUrl = getTechIcon(tech);
                if (!iconUrl) return "";
                return /*html*/ `<img class="project__tech-logo" src="${iconUrl}" title="${techs/* default */.A[tech]}" alt="${techs/* default */.A[tech]}">`;
            })
            .join("")}
                    </div>
                </div>
                ${kpi ? `<div class="project__kpi">${kpi}</div>` : ""}
                <div class="project__description">${t[id].description}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = projects/* default */.A.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${projects/* default */.A
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});


/***/ },

/***/ 635
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "angkasa",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 210, automated: 7 }
    },
    {
        id: "onesignal-subs-scraper",
        status: "AUTOMATED",
        techs: ["onesignal", "sheets"],
        links: { github: "https://github.com/vendox-automation" },
        stats: { manual: 17, automated: 14 }
    },
    {
        id: "onesignal-domain-inserter",
        status: "AUTOMATED",
        techs: ["onesignal", "sheets"],
        links: {},
        stats: { manual: 180, automated: 90 }
    },
    {
        id: "stamplist",
        status: "AUTOMATED",
        techs: ["sheets", "chrome", "telegram"],
        links: {},
        stats: { manual: 18000, automated: 68 }
    },
    {
        id: "game-arrangement",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 600, automated: 4 }
    },
    {
        id: "payment-gateway-checker",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 15, automated: 1.5 }
    },
    {
        id: "vip-file-updater",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 30, automated: 5 }
    },
    {
        id: "account-reconcilator",
        status: "AUTOMATED",
        techs: ["sheets", "telegram"],
        links: {},
        stats: { manual: 15, automated: 5 }
    },
    {
        id: "manual-banking",
        status: "AUTOMATED",
        techs: ["excel", "sheets", "chrome"],
        links: {},
        stats: { manual: 10, automated: 0.4 }
    },
    {
        id: "predictive-dialer-uploader",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 60, automated: 16 }
    },
    {
        id: "broadcast-dialer-uploader",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 30, automated: 7 }
    },
    {
        id: "facebook-comment-scraper",
        status: "AUTOMATED",
        techs: ["facebook", "sheets", "telegram"],
        links: { github: "https://github.com/vendox-automation" },
        stats: { manual: 660, automated: 78 }
    }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ },

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

/***/ 847
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(340);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ filter: (p) => !p.isInProgress }, t2.projects)}
    `;
});




/***/ }

}]);