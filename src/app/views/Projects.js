import Path from "../components/Path.js";
import ProjectList from "../components/ProjectList.js";
import Summary from "../components/Summary.js";

import "styles/pages/projects.sass"

export default (t, t2) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        <div class="projects-content">
            ${Summary(t.summary)}
            ${ProjectList({ filter: (p) => !p.isInProgress }, t2.projects)}
        </div>
    `;
};


