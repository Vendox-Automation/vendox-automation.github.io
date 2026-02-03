"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[864],{

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

/***/ 864
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(928);




const getTechIcon = (tech) => {
    const customIcons = {
        excel: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
        sheets: "https://img.icons8.com/color/48/google-sheets.png",
        selenium: "https://skillicons.dev/icons?i=selenium",
        facebook: "https://img.icons8.com/color/48/facebook-new.png",
        onesignal: "https://play-lh.googleusercontent.com/hI34BLUTp8l-oPdHHsTYSu44sWG-0N7xMmfTbldFUjb8tI0LSDoahrHQiXYjlLHIHTI",
        chrome: "https://cdn-icons-png.flaticon.com/512/732/732205.png",
        telegram: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/960px-Telegram_logo.svg.png",
    };

    if (customIcons[tech]) return customIcons[tech];
    const techIconMap = {
        ts: "typescript/typescript-original",
        js: "javascript/javascript-original",
        python: "python/python-original",
        html: "html5/html5-original",
        css: "css3/css3-original",
        sass: "sass/sass-original",
        node: "nodejs/nodejs-original",
        figma: "figma/figma-original",
        git: "git/git-original",
        react: "react/react-original",
        tailwind: "tailwindcss/tailwindcss-original",
    };
    const icon = techIconMap[tech];
    return icon ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg` : null;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {
    const segments = window.location.pathname.split("/").filter(s => s && s !== "project" && s !== "projects");
    const id = segments[0] || "angkasa";

    console.log("Project ID extracted:", id);

    const projectData = locale?.projects?.[id];
    const projectConfig = _consts_projects__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.find(p => p.id === id) || { techs: [], stats: {}, links: {} };

    console.log("Project Data Found:", !!projectData);
    console.log("Project Config Found:", !!projectConfig);

    if (!projectData) {
        return /*html*/ `
            <div class="project-details">
                <div class="container">
                    <h2 class="h2" style="text-align: center; margin-top: 100px;">Project Not Found</h2>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <a href="/projects" class="button"><- Back to Projects</a>
                    </div>
                </div>
            </div>
        `;
    }

    const name = projectData.name || "Untitled Project";
    const description = projectData.fullDescription || projectData.description || "";

    // Default stats if not provided in config
    const stats = projectConfig.stats || {
        manual: 60,
        automated: 2,
        label: "Processing Time"
    };

    const manual = stats.manual || 1;
    const savedPercent = Math.round(((manual - stats.automated) / manual) * 100);

    return /*html*/ `
        <div class="project-details">
            <div class="container">
                <a href="/projects" class="project-details__back">
                    <span class="icon"><-</span> Back to Projects
                </a>
                
                <section class="project-details__hero">
                    <h1 class="project-details__title">${name}</h1>
                </section>

                <div class="project-details__grid">
                    <div class="project-details__main">
                        <section class="project-details__section">
                            <h2 class="h2 project-details__section-title">Overview</h2>
                            <div class="project-details__description">
                                ${description}
                            </div>
                        </section>

                        <section class="project-details__section">
                            <h2 class="h2 project-details__section-title">Platforms Involved</h2>
                            <div class="tech-list">
                                ${projectConfig.techs.map(tech => {
        const icon = getTechIcon(tech);
        const techName = _consts_techs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[tech] || tech;
        return icon ? `
                                        <div class="tech-item" title="${techName}">
                                            <img src="${icon}" alt="${techName}" class="tech-icon">
                                            <span>${techName}</span>
                                        </div>
                                    ` : '';
    }).join('')}
                            </div>
                        </section>
                    </div>

                    <aside class="project-details__sidebar">
                        <div class="impact-card">
                            <h3 class="impact-card__title">Efficiency Boost</h3>
                            <div class="impact-card__chart">
                                <div class="circular-progress" style="--p: ${savedPercent}">
                                    <div class="circular-progress__value">${savedPercent}%</div>
                                </div>
                            </div>
                            <div class="impact-card__stats">
                                <div class="impact-stat">
                                    <span class="impact-stat__label">Manual</span>
                                    <span class="impact-stat__value red">${manual}m</span>
                                </div>
                                <div class="impact-stat__divider"></div>
                                <div class="impact-stat">
                                    <span class="impact-stat__label">Automated</span>
                                    <span class="impact-stat__value green">${stats.automated}m</span>
                                </div>
                            </div>
                            <div class="impact-card__footer">
                                ${manual - stats.automated} mins saved per cycle
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    `;
});


/***/ }

}]);