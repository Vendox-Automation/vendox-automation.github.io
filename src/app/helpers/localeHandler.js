
async function getLocale() {
    return fetch(`/locales/en.json`)
        .then(res => {
            if (!res.ok) throw new Error(`Locale file not found: ${res.statusText}`);
            return res.json();
        })
}

export default () => { };
export { getLocale }
