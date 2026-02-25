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
                            <h2 class="h2 project-details__section-title">Workflow Optimization</h2>
                            
                            <div class="workflow-grid">
                                <div class="workflow-flows">
                                    <div class="flow-container before">
                                        <h3 class="flow-container__subtitle">Before Automation</h3>
                                        <div class="flow-timeline">
                                            ${(projectConfig.flow?.before || []).map((step, index) => `
                                                <div class="flow-step">
                                                    <div class="flow-step__marker">${index + 1}</div>
                                                    <div class="flow-step__content">
                                                        <p class="flow-step__text">${step.text}</p>
                                                        <span class="flow-step__time">${step.time}</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="flow-total">Total: ${manual} min</div>
                                    </div>

                                    <div class="flow-comparison__divider"></div>

                                    <div class="flow-container after">
                                        <h3 class="flow-container__subtitle">After Automation</h3>
                                        <div class="flow-timeline">
                                            ${(projectConfig.flow?.after || []).map((step, index) => `
                                                <div class="flow-step">
                                                    <div class="flow-step__marker">
                                                        ${index === (projectConfig.flow?.after.length - 1) ? '✓' : index + 1}
                                                    </div>
                                                    <div class="flow-step__content">
                                                        <p class="flow-step__text">${step.text}</p>
                                                        <span class="flow-step__time">${step.time}</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                        <div class="flow-total">Total: ${stats.automated} min</div>
                                    </div>
                                </div>

                                <div class="workflow-sidebar">
                                    <div class="impact-card">
                                        <h3 class="impact-card__title">Efficiency Boost</h3>
                                        <div class="impact-card__chart">
                                            <div class="circular-progress" style="--p: ${savedPercent}">
                                                <div class="circular-progress__value">${savedPercent}%</div>
                                            </div>
                                        </div>
                                        <div class="impact-card__footer">
                                            ${manual - stats.automated} mins saved per cycle
                                        </div>
                                    </div>
                                </div>
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
                </div>
            </div>
        </div>
    `;
});


/***/ }

}]);