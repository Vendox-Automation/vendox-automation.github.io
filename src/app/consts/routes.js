
/**
 * @type {import("../../types/Routes").Routes}
 */
export default {
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
};