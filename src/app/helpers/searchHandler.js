import techsMap from "@/consts/techs";

export default () => {
    const searchInput = document.querySelector('.filter-bar__input');
    const categories = document.querySelectorAll('.filter-category');

    function filter() {
        if (!searchInput) return;

        const query = searchInput.value.toLowerCase().trim();
        const projects = document.querySelectorAll('.project');

        projects.forEach(p => {
            const name = (p.getAttribute('data-name') || '').toLowerCase();
            const projectTechKeys = (p.getAttribute('data-techs') || '').split(',');

            const projectTechLabels = projectTechKeys.map(k => (techsMap[k] || k).toLowerCase());

            const matchesName = name.includes(query);
            const matchesTech = projectTechKeys.some(k => k.toLowerCase().includes(query)) ||
                projectTechLabels.some(l => l.includes(query));

            const isVisible = !query || matchesName || matchesTech;

            if (isVisible) {
                if (p.style.display === 'none') {
                    p.style.display = 'flex';
                    // Soft reset for animation
                    p.style.animation = 'none';
                    p.offsetHeight;
                    p.style.animation = '';
                }
            } else {
                p.style.display = 'none';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filter);

        categories.forEach(cat => {
            cat.addEventListener('mousedown', (e) => {
                e.preventDefault();
                const label = cat.querySelector('.filter-category__label');
                const techName = (label ? label.innerText : cat.innerText).toLowerCase().trim();

                searchInput.value = techName;
                filter();
            });
        });

        // Initial filter in case search bar has value on load
        filter();
    }
}
