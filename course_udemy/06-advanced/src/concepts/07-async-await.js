/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwait2Component = async (element) => {

    console.time('start')

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${value1},
        value2: ${value2},
        value3: ${value3},
    `;

    console.timeEnd('start')

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
