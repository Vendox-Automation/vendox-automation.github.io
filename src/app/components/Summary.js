import projects from "@/consts/projects";

export default (t) => {
    const activeProjects = projects.filter(p => !p.isInProgress);
    const totalProjects = 30;

    // Extract unique fields from all projects
    const fields = [...new Set(activeProjects.flatMap(p => p.fields || []).filter(Boolean))];

    return /*html*/ `
        <div class="section-reveal">
            <div class="summary-container-dual">
                <div class="summary-box summary-box--count">
                    <div class="summary-box__content">
                        <div class="summary-box__number" data-count="${totalProjects}">0</div>
                        <div class="summary-box__title">${t.projects_count}</div>
                        <div class="summary-box__subtitle">${t.projects_count_sub}</div>
                    </div>
                    <div class="summary-box__icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                </div>
                
                <div class="summary-box summary-box--fields">
                <div class="summary-box__content">
                    <div class="summary-box__title">${t.expertise_title}</div>
                    <div class="summary-box__subtitle">${t.expertise_sub}</div>
                    <div class="summary-box__tags">
                        ${fields.map((field, index) => `<span class="summary-box__tag" style="--delay: ${index}">${field}</span>`).join('')}
                    </div>
                </div>
                <div class="summary-box__icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>
                </div>
            </div>
            </div>
        </div>
    `;
};
