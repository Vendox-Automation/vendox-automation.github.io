/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "angkasa",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 120, automated: 5 }
    },
    {
        id: "onesignal-subs-scraper",
        status: "AUTOMATED",
        techs: ["onesignal", "sheets"],
        links: { github: "https://github.com/vendox-automation" },
        stats: { manual: 45, automated: 1 }
    },
    {
        id: "onesignal-domain-inserter",
        status: "AUTOMATED",
        techs: ["onesignal", "sheets"],
        links: {},
        stats: { manual: 30, automated: 1 }
    },
    {
        id: "stamplist",
        status: "AUTOMATED",
        techs: ["sheets", "chrome", "telegram"],
        links: {},
        stats: { manual: 180, automated: 10 }
    },
    {
        id: "game-arrangement",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 90, automated: 15 }
    },
    {
        id: "payment-gateway-checker",
        status: "AUTOMATED",
        techs: ["chrome", "telegram"],
        links: {},
        stats: { manual: 60, automated: 2 }
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
        stats: { manual: 150, automated: 12 }
    },
    {
        id: "manual-banking",
        status: "AUTOMATED",
        techs: ["excel", "sheets", "chrome"],
        links: {},
        stats: { manual: 240, automated: 20 }
    },
    {
        id: "predictive-dialer-uploader",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 40, automated: 3 }
    },
    {
        id: "broadcast-dialer-uploader",
        status: "AUTOMATED",
        techs: ["excel", "sheets"],
        links: {},
        stats: { manual: 40, automated: 3 }
    },
    {
        id: "facebook-comment-scraper",
        status: "AUTOMATED",
        techs: ["facebook", "sheets", "telegram"],
        links: { github: "https://github.com/vendox-automation" },
        stats: { manual: 600, automated: 30 }
    }
];

export default projects;
