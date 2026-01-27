import techs from "@/consts/techs";

export default () => {
    const popularTechs = ['python', 'js', 'react', 'node', 'ts'];

    return /*html*/`
        <div class="filter-bar container">
            <div class="filter-bar__search">
                <input type="text" placeholder="Search projects..." class="filter-bar__input">
                <button class="filter-bar__button">Search</button>
            </div>
            <div class="filter-bar__categories">
                ${popularTechs.map(tech => `
                    <div class="filter-category">
                        <span class="filter-category__label">${techs[tech]}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};
