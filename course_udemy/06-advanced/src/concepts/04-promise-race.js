/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...'

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue)

};

const slowPromise = () => new Promise(res => {
    setTimeout(() => { res('Slow promise') }, 2000)
});

const mediumPromise = () => new Promise(res => {
    setTimeout(() => { res('Medium promise') }, 1500)
});

const fastPromise = () => new Promise(res => {
    setTimeout(() => { res('Fast promise') }, 1000)
});
