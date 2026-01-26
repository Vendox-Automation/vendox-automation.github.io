import techs from "@/consts/techs";

export default ({ description }) => {
    const popularTechs = ['python', 'selenium', 'excel', 'sheets', 'facebook'];
    const pathName = window.location.pathname.slice(1);
    const isProjectsPage = pathName === 'projects';

    return /*html*/`
        <div class="path">
            <div class="path__content">
                <div class="path__info">
                    <h1 class="h1 path__name">${pathName}</h1>
                    <p class="path__description">${description}</p>
                </div>
                ${isProjectsPage ? `
                <div class="filter-bar">
                    <div class="filter-bar__search">
                        <input type="text" placeholder="Search projects..." class="filter-bar__input">
                        <div class="filter-bar__dropdown">
                            <div class="filter-bar__dropdown-content">
                                ${popularTechs.map(tech => `
                                    <div class="filter-category">
                                        <span class="filter-category__label">${techs[tech]}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                ` : ""}
            </div>
        </div>
    `
}
