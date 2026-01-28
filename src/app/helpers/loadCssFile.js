export default (pathName) => {
    const link = document.createElement("link")
    link.href = `/${pathName}.css`;
    link.rel = "stylesheet"

    document.head.appendChild(link)
}