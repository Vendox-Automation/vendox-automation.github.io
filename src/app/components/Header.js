import routes from "@/consts/routes";
import MediaIcon from "./MediaIcon";

const paths = ["/", "/projects"]

export default (t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />




            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.webp" alt="vendox logo">
                        <span class="logo__name">vendox-automation</span>
                    </a>
                    <div class="header__links">
                        ${paths
            .map(
                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${window.location.pathname === path
                        ? "header__link_active"
                        : ""
                    }">${t[routes[path].name]}</a>
                            `
            )
            .join("")}
                    </div>


                </div>
            </div>
            

        </header>
    `;
};
