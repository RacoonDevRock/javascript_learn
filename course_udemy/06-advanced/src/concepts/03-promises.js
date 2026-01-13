import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => element.innerHTML = hero.name;
    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    }
    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    };

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f97c29d020f1e1f6d';


    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
        .catch(renderError)


    // FORMA N2
    // let hero1;
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHero(hero1, hero2)
    //     })
    //     .catch(renderError);



    // FORMA N1
    // findHero(id1)
    //     .then(res1 => findHero(id2)
    //         .then(res2 => renderTwoHero(res1, res2))
    //         .catch(err => renderError(err))
    //     )
    //     .catch(err => renderError(err));

};

/**
 * 
 * @param {String} heroId 
 * @returns {Promise}
 */
const findHero = (heroId) => {


    // 1er forma de crear promesa
    // const promise = new Promise((resolve, reject) => {

    //     const heroFounded = heros.find(hero => hero.id === heroId);

    //     if (heroFounded) {
    //         resolve(heroFounded);
    //         return;
    //     }

    //     reject(`Hero with ID: ${heroId} not found`);

    // });

    // return promise;

    // 2da forma de crear promesa
    return new Promise((resolve, reject) => {

        const heroFounded = heroes.find(hero => hero.id === heroId);

        if (heroFounded) {
            resolve(heroFounded);
            return;
        }

        reject(`Hero with ID: ${heroId} not found`);

    });



}
