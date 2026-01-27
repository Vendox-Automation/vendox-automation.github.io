import projects from "@/consts/projects";
import websites from "@/consts/websites";
import techs from "@/consts/techs";
import media from "@/consts/media";

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
    selenium: "https://img.icons8.com/color/48/selenium.png",
    facebook: "https://img.icons8.com/color/48/facebook-new.png",
};



function getTechIcon(tech) {
    if (customIcons[tech]) return customIcons[tech];

    const icon = techIconMap[tech];
    if (icon) {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
    }
    return null;
}


export default ({ id }, t) => {
    const project = projects.find((p) => p.id === id);
    const { techs: projectTech, status, kpi } = project;

    return /*html*/ `
        <div class="project" data-techs="${projectTech.join(',').toLowerCase()}" data-name="${t[id].name.toLowerCase()}">

            <div class="project__content">
                <div class="project__header">
                    <div class="project__name">${t[id].name}</div>
                    <div class="project__tech-logos">
                        ${projectTech
            .map((tech) => {
                const iconUrl = getTechIcon(tech);
                if (!iconUrl) return "";
                return /*html*/ `<img class="project__tech-logo" src="${iconUrl}" title="${techs[tech]}" alt="${techs[tech]}">`;
            })
            .join("")}
                    </div>
                </div>
                ${kpi ? `<div class="project__kpi">${kpi}</div>` : ""}
                <div class="project__description">${t[id].description}</div>
            </div>
        </div> 
    `;
};
