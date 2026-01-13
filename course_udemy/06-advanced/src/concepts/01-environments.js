/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {

    console.log(import.meta.env.VITE_API_KEY);


    const html = `
        Dev env: ${import.meta.env.DEV} <br/>
        Prod env: ${import.meta.env.PROD} <br/>
        KEY env: ${import.meta.env.VITE_API_KEY} <br/>
        URL env: ${import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;

};
