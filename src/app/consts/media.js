import proxy from "../proxies/media"

const media = {
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

export default new Proxy(media, proxy);
