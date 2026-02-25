import projects from "@/consts/projects";
import techs from "@/consts/techs";
import "styles/pages/projectDetails.sass";

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

export default (t, locale) => {
    const segments = window.location.pathname.split("/").filter(s => s && s !== "project" && s !== "projects");
    const id = segments[0] || "angkasa";

    console.log("Project ID extracted:", id);

    const projectData = locale?.projects?.[id];
    const projectConfig = projects.find(p => p.id === id) || { techs: [], stats: {}, links: {} };

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
        const techName = techs[tech] || tech;
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
};
