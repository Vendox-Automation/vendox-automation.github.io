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

export default projects;
