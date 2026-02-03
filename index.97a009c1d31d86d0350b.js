/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 175
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    discord: "discord.com/users/",
    github: "github.com/",
    figma: "figma.com/@",
    replit: "replit.com/@",
    stackOverflow: "stackoverflow.com/users/",
    codewars: "codewars.com/users/",
    devTo: "dev.to/",
    cssBattle: "cssbattle.dev/player/",
    codepen: "codepen.io/",
    dribble: "dribbble.com/",
    email: "mailto:"
});

/***/ },

/***/ 718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var consts_media = __webpack_require__(934);
;// ./src/app/components/MediaIcon.js


/* harmony default export */ const MediaIcon = (({ name }) => {
    return /*html*/ `
        <a href="${media[name]}" class="media">
            <img src="/images/icons/${name}.svg" alt="${name}" class="media__icon"/>
        </a>`;
});

;// ./src/app/components/Footer.js



/* harmony default export */ const Footer = ((t) => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__header">
                            <div class="logo">
                                <img src="/images/logo.webp" alt="logo" class="logo__img">
                                <div class="logo__name">vendox-automation</div>
                            </div>
                            <a class="footer__email" href="${consts_media/* default */.A.email}">${consts_media/* default */.A.emailRaw}</a>
                        </div>

                        <p class="footer__description">${t.description}</p>
                    </div>

                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
});

// EXTERNAL MODULE: ./src/app/consts/routes.js
var routes = __webpack_require__(739);
;// ./src/app/components/Header.js



const paths = ["/", "/projects"]

/* harmony default export */ const Header = ((t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />




            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.webp" alt="vendox logo">
                        <span class="logo__name">vendox-automation</span>
                    </a>
                    <div class="header__links">
                        ${paths
            .map(
                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${window.location.pathname === path
                        ? "header__link_active"
                        : ""
                    }">${t[routes/* default */.A[path].name]}</a>
                            `
            )
            .join("")}
                    </div>


                </div>
            </div>
            

        </header>
    `;
});

;// ./src/app/helpers/localeHandler.js

async function getLocale() {
    return fetch(`/locales/en.json`)
        .then(res => {
            if (!res.ok) throw new Error(`Locale file not found: ${res.statusText}`);
            return res.json();
        })
}

/* harmony default export */ const localeHandler = (() => { });


;// ./src/app/views/Layout.js




/* harmony default export */ const Layout = (async (content, path) => {
    const locale = await getLocale()

    return /*html*/ `
        ${Header(locale.header)}
        <div class="container content page-enter">
            ${content(locale.pages[path.name] || {}, locale)}
        </div>
        ${Footer(locale.footer)}
    `;
});


/***/ },

/***/ 739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * @type {import("../../types/Routes").Routes}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "/": {
        name: "home",
        element: "Home",
    },
    "/projects": {
        name: "projects",
        element: "Projects",
    },

    "/404": {
        name: "404",
        element: "PageNotFound",
    },

    // "/contacts": {
    //     name: "contacts",
    //     element: "Contacts",
    // },
});

/***/ },

/***/ 928
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ts: "TypeScript",
    js: "JavaScript",
    python: "Python",
    sqlite: "SQLite",
    mongo: "MongoDB",
    postgreSql: "PostgreSQL",
    html: "HTML",
    css: "CSS",
    sass: "SASS",
    scss: "SCSS",
    less: "Less",
    stylus: "Stylus",
    ejs: "EJS",
    jinja: "Jinja2",
    node: "Node.js",
    vscode: "VSCode",
    nvim: "NeoVim",
    figma: "Figma",
    git: "Git & GitHub",
    xfce: "XFCE",
    react: "React",
    discordJs: "Discord.js",
    flask: "Flask",
    quart: "Quart",
    express: "Express",
    rtk: "RTK",
    zod: "Zod",
    webpack: "WebPack",
    pug: "Pug",
    gulp: "Gulp",
    next: "Next",
    deno: "Deno",
    pixijs: "PixiJS",
    preact: "Preact",
    selenium: "Selenium",
    excel: "Excel",
    sheets: "Google Sheets",
    facebook: "Facebook",
    onesignal: "OneSignal",
    chrome: "Chrome",
    telegram: "Telegram",
});

/***/ },

/***/ 934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ consts_media)
});

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
;// ./src/app/proxies/media.js



/* harmony default export */ const media = ({
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://${websites/* default */.A.discord}${target.discord.id}`
        if (name === "discordTag") return target.discord.tag

        return `${name === "email" ? "" : "https://"}${websites/* default */.A[name] ?? ""}${target[name]}`
    }
});
;// ./src/app/consts/media.js


const media_media = {
    discord: {
        id: "vendox-automation", // Updated tag/id placeholder
        tag: "vendox-automation",
    },
    stackOverflow: {
        id: "vendox-automation",
        name: "vendox-automation",
    },
    github: "vendox-automation",
    figma: "vendox_automation",
    replit: "vendox_automation",
    codewars: "vendox_automation",
    devTo: "vendox_automation",
    cssBattle: "vendox_automation",
    codepen: "vendox_automation",
    dribble: "vendox_automation",
    email: "contact@vendox-automation.com"
}

/* harmony default export */ const consts_media = (new Proxy(media_media, media));


/***/ },

/***/ 942
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Contacts": [
		960,
		960
	],
	"./Contacts.js": [
		960,
		960
	],
	"./Home": [
		245,
		245
	],
	"./Home.js": [
		245,
		245
	],
	"./Layout": [
		718
	],
	"./Layout.js": [
		718
	],
	"./PageNotFound": [
		573,
		573
	],
	"./PageNotFound.js": [
		573,
		573
	],
	"./ProjectDetails": [
		864,
		864
	],
	"./ProjectDetails.js": [
		864,
		864
	],
	"./Projects": [
		847,
		847
	],
	"./Projects.js": [
		847,
		847
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 942;
module.exports = webpackAsyncContext;

/***/ }

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"245":"713fbe10aad4b5665cff","573":"0052a9a5ba65859a2062","847":"76e181f9cc00211d593c","864":"ebc9d79f95072b0eb1fd","960":"10c4a5b4ab84c3ae58ac"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"245":"c527e3ab98d40e3a31dc","847":"3bd8f97c24d691e85b6a","864":"6b495d5c20acf30b289d"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "portfolio:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"245":1,"847":1,"864":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/app/views/Layout.js + 4 modules
var Layout = __webpack_require__(718);
// EXTERNAL MODULE: ./src/app/consts/routes.js
var routes = __webpack_require__(739);
;// ./src/app/helpers/startTitleAnimation.js

const steps = "/-\\|";
const FPS = 2
const frameInterval = 1000 / FPS;

let step = 0;
let lastTimestep = 0;

/* harmony default export */ const startTitleAnimation = ((pathName) => {
    window.requestAnimationFrame(animation);

    function animation(timestamp) {
        if (lastTimestep + frameInterval < timestamp) {
            document.title = `${steps[step++]} vendox-automation | ${pathName}`;

            step %= steps.length;
            lastTimestep = timestamp;
        }

        window.requestAnimationFrame(animation);
    }
});
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
;// ./src/app/helpers/searchHandler.js


/* harmony default export */ const searchHandler = (() => {
    const searchInput = document.querySelector('.filter-bar__input');
    const categories = document.querySelectorAll('.filter-category');

    function filter() {
        if (!searchInput) return;

        const query = searchInput.value.toLowerCase().trim();
        const projects = document.querySelectorAll('.project');

        projects.forEach(p => {
            const name = (p.getAttribute('data-name') || '').toLowerCase();
            const projectTechKeys = (p.getAttribute('data-techs') || '').split(',');

            const projectTechLabels = projectTechKeys.map(k => (techs/* default */.A[k] || k).toLowerCase());

            const matchesName = name.includes(query);
            const matchesTech = projectTechKeys.some(k => k.toLowerCase().includes(query)) ||
                projectTechLabels.some(l => l.includes(query));

            const isVisible = !query || matchesName || matchesTech;

            if (isVisible) {
                if (p.style.display === 'none') {
                    p.style.display = 'flex';
                    // Soft reset for animation
                    p.style.animation = 'none';
                    p.offsetHeight;
                    p.style.animation = '';
                }
            } else {
                p.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filter);

        categories.forEach(cat => {
            cat.addEventListener('mousedown', (e) => {
                e.preventDefault();
                const label = cat.querySelector('.filter-category__label');
                const techName = (label ? label.innerText : cat.innerText).toLowerCase().trim();

                searchInput.value = techName;
                filter();
            });
        });

        // Initial filter in case search bar has value on load
        filter();
    }
});

;// ./src/app/helpers/replacePath.js

// From https://github.com/rafgraph/spa-github-pages
/* harmony default export */ const replacePath = (async () => {
    const l = window.location;

    if (l.search[1] === "/") {
        let decoded = l.search
            .slice(1)
            .split("&")
            .map((s) => s.replace(/~and~/g, "&"))
            .join("?");

        window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
});
;// ./src/app/helpers/revealHandler.js
/* harmony default export */ const revealHandler = (() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-reveal_visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-reveal');
    sections.forEach(section => observer.observe(section));
});

;// ./src/app/index.js









const rootId = "app";
async function render() {
    try {
        const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
        let path = routes/* default */.A[currentPath] ?? routes/* default */.A["/404"];

        console.log("[Router] Current pathname:", window.location.pathname);
        console.log("[Router] Normalized path:", currentPath);

        // Support both /project/id and /projects/id for details
        if (currentPath.startsWith("/project/") || currentPath.startsWith("/projects/")) {
            const segments = currentPath.split("/");
            console.log("[Router] Deep link segments:", segments);
            if (segments.length >= 3) {
                path = {
                    name: "projectdetails",
                    element: "ProjectDetails",
                };
            }
        }

        console.log("[Router] Final route choice:", path);

        startTitleAnimation(path.name);

        console.log(`[Router] Importing view: ./views/${path.element}`);
        const viewModule = await __webpack_require__(942)(`./${path.element}`);
        const view = viewModule.default;

        if (typeof view !== "function") {
            throw new Error(`View element "${path.element}" is not a valid component function.`);
        }

        const root = document.getElementById(rootId);
        if (!root) {
            console.error("[Router] Root element (#app) not found!");
            return;
        }

        console.log("[Router] Calling Layout wrapper...");
        const html = await (0,Layout["default"])(view, path);
        console.log("[Router] Layout generated successfully. Injecting HTML...");
        root.innerHTML = html;

        // Handle scrolling
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }

        revealHandler();

        console.log("[Router] Render complete.");

    } catch (error) {
        console.error("[Router] CRITICAL RENDER ERROR:", error);
        const root = document.getElementById(rootId);
        if (root) {
            root.innerHTML = `
                <div style="padding: 4rem; text-align: center; color: white; background: #1e1e1e; min-height: 100vh;">
                    <h1 style="color: #ff6b6b;">Application Error</h1>
                    <p style="color: #abb2bf; margin-bottom: 2rem;">${error.message}</p>
                    <pre style="text-align: left; background: #282c34; padding: 1rem; border-radius: 8px; overflow: auto; max-width: 800px; margin: 0 auto 2rem;">${error.stack}</pre>
                    <a href="/" style="color: #c778dd; text-decoration: none; border: 1px solid #c778dd; padding: 0.5rem 1rem; border-radius: 4px;">Return to Home</a>
                </div>
            `;
        }
    }
}

replacePath()
    .then(() => render())
    .then(() => searchHandler())
    .catch(err => console.error("Initialization error:", err));

// Global Link Interceptor for SPA routing
window.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.getAttribute("target")
    ) {
        const url = new URL(link.href);
        const isSamePath = url.pathname === window.location.pathname;

        if (isSamePath && url.hash) {
            const id = url.hash.slice(1);
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                window.history.pushState(null, null, link.href);
                element.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        e.preventDefault();

        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) hamburger.checked = false;

        window.history.pushState(null, null, link.href);
        render().then(() => searchHandler());
    }
});

// Handle Back/Forward buttons
window.addEventListener("popstate", () => {
    render().then(() => searchHandler());
});


})();

/******/ })()
;