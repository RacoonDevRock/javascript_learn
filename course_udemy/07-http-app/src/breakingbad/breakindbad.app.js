import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const BreakingbadApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad API';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote');
    const authLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authLabel, nextQuoteButton);
    }

    fetchAPI()
        .then(renderQuote)

    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        await fetchAPI().then(renderQuote);
    })

}

/**
 * uso de (response => response.json()) porque la API fetch devuelve una promesa 
 * que resuelve en un objeto Response (no el JSON directamente), 
 * el cual tiene métodos como .json() para parsear el cuerpo del mensaje 
 */
const fetchAPI = async () => {

    const [response] = await fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('BreakingBadAPI not works...');
            }
            return response.json()
        })

    return response;

}

const axiosAPI = async (element) => {

    const [response] = axios.get(API_URL)
        .then({ data }[0])




}
