"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

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

/***/ 340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

// EXTERNAL MODULE: ./src/app/consts/projects.js
var projects = __webpack_require__(635);
// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js
/* unused harmony import specifier */ var Project_websites;
/* unused harmony import specifier */ var Project_media;





function mapLinks(links) {
    function map(link) {
        let href =
            "https://" + (link === "live" ? "" : Project_websites[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = Project_media.github + links[link]


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

                <div class="project__efficiency">
                    <span class="project__efficiency-label">Time saved:</span>
                    <div class="project__efficiency-bar">
                        ${(() => {
            const stats = project.stats || { manual: 60, automated: 2 };
            const manual = stats.manual || 1;
            const timeSaved = manual - stats.automated;
            const savedPercent = Math.round((timeSaved / manual) * 100);
            return `
                                <div class="project__efficiency-fill" style="width: ${savedPercent}%"></div>
                                <span class="project__efficiency-value">${savedPercent}%</span>
                            `;
        })()}
                    </div>
                </div>
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
        id: "data-upload",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 60, automated: 2 },
        flow: {
            before: [
                { text: "Export raw data from source sources (Excel/CSV)", time: "10 min" },
                { text: "Manual data formatting and cleaning", time: "20 min" },
                { text: "Manual login to operational platforms", time: "5 min" },
                { text: "Entry of data records one by one", time: "15 min" },
                { text: "Manual verification and error checking", time: "10 min" }
            ],
            after: [
                { text: "Automated data fetching from source", time: "10 sec" },
                { text: "Instant validation and multi-threaded upload", time: "1 min" },
                { text: "Automated success reporting and logs", time: "50 sec" }
            ]
        }
    },
    {
        id: "data-collection",
        status: "AUTOMATED",
        techs: ["chrome", "telegram", "facebook"],
        links: {},
        stats: { manual: 480, automated: 15 },
        flow: {
            before: [
                { text: "Navigate to multiple websites manually", time: "120 min" },
                { text: "Manually extract and copy-paste data", time: "240 min" },
                { text: "Manual data cleaning and structuring", time: "120 min" }
            ],
            after: [
                { text: "Intelligent scraper engine runs automatically", time: "10 min" },
                { text: "Real-time sync to database/sheets", time: "5 min" }
            ]
        }
    },
    {
        id: "scheduling",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 120, automated: 5 },
        flow: {
            before: [
                { text: "Manual verification of availability/dates", time: "20 min" },
                { text: "Setting up promo/brand states manually", time: "60 min" },
                { text: "Cross-checking overlaps and conflicts", time: "40 min" }
            ],
            after: [
                { text: "Simple configuration upload", time: "2 min" },
                { text: "Automated scheduler handles orchestration", time: "3 min" }
            ]
        }
    },
    {
        id: "monitoring",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 30, automated: 0.5 },
        flow: {
            before: [
                { text: "Manual login and periodic status checks", time: "20 min" },
                { text: "Manual reporting of system anomalies", time: "10 min" }
            ],
            after: [
                { text: "Continuous 24/7 background monitoring", time: "20 sec" },
                { text: "Instant Telegram alerts on detection", time: "10 sec" }
            ]
        }
    },
    {
        id: "data-processing",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 180, automated: 10 },
        flow: {
            before: [
                { text: "Retrieve fragmented settlement docs", time: "30 min" },
                { text: "Apply complex manual filtering logic", time: "90 min" },
                { text: "Manual reconciliation against database", time: "60 min" }
            ],
            after: [
                { text: "Automated document fetcher engine", time: "2 min" },
                { text: "Logic processor applies filters instantly", time: "5 min" },
                { text: "Final reconciled report generation", time: "3 min" }
            ]
        }
    }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


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