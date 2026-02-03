import Hero from "@/blocks/home/Hero.js";
import TrustBadges from "@/blocks/home/TrustBadges.js";
import Projects from "@/blocks/home/Projects.js";

import About from "@/blocks/home/About.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass"


export default (t, locale) => {
    return /*html*/`
        <div class="section-reveal">${Hero(t.hero)}</div>
        <div class="section-reveal">${TrustBadges()}</div>
        <div class="section-reveal">${Projects(t.projects, locale.projects)}</div>
        <div class="section-reveal">${About(t.about)}</div>
        <div class="section-reveal">${Contacts(t.contacts)}</div>
    `;
};

