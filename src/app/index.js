import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import searchHandler from "./helpers/searchHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";
import revealHandler from "./helpers/revealHandler";

import "styles/styles.sass";

const rootId = "app";
async function render() {
    try {
        const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
        let path = routes[currentPath] ?? routes["/404"];

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

        loadCssFile(path.name);
        startTitleAnimation(path.name);

        console.log(`[Router] Importing view: ./views/${path.element}`);
        const viewModule = await import(`./views/${path.element}`);
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
        const html = await Layout(view, path);
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

