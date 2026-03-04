export default () => {
    const tags = document.querySelectorAll('.summary-box__tag');
    const projects = document.querySelectorAll('.project');
    const countBox = document.querySelector('.summary-box--count');
    const searchInput = document.querySelector('.filter-bar__input');

    if (!projects.length) return;

    function resetFilters() {
        tags.forEach(t => t.classList.remove('is-active'));
        projects.forEach(p => {
            p.style.display = 'flex';
            p.style.animation = 'none';
            p.offsetHeight;
            p.style.animation = '';
        });
        if (searchInput) searchInput.value = '';
    }

    if (countBox) {
        countBox.style.cursor = 'pointer';
        countBox.addEventListener('click', resetFilters);
    }

    tags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            const field = tag.innerText.toLowerCase().trim();
            const isActive = tag.classList.contains('is-active');

            // Reset all tags
            tags.forEach(t => t.classList.remove('is-active'));

            if (isActive) {
                resetFilters();
            } else {
                // Activate filter
                tag.classList.add('is-active');

                projects.forEach(p => {
                    const projectFields = (p.getAttribute('data-fields') || '').split(',');
                    const matches = projectFields.some(f => f.trim() === field);

                    if (matches) {
                        p.style.display = 'flex';
                        p.style.animation = 'none';
                        p.offsetHeight;
                        p.style.animation = '';
                    } else {
                        p.style.display = 'none';
                    }
                });

                if (searchInput) {
                    searchInput.value = tag.innerText.trim();
                }
            }
        });
    });
};
