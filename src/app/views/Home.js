import Hero from "@/blocks/home/Hero.js";
import TrustBadges from "@/blocks/home/TrustBadges.js";
import Projects from "@/blocks/home/Projects.js";

import About from "@/blocks/home/About.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass"


export default (t, locale) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${TrustBadges()}
        ${Projects(t.projects, locale.projects)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
    `;
};

