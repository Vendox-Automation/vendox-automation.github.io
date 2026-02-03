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

export default projects;
