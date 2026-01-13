import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb26';

    console.log('init component');


    findHero(id1)
        .then(({ name }) => element.innerHTML = name)
        .catch(error => element.innerHTML = error)

    console.log('fin del componente');


};

const findHero = async (heroID) => {
    const hero = heroes.find(hero => hero.id === heroID);

    if (!hero) throw `Hero with ID: ${heroID} not found`;

    return hero

};
