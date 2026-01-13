import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';

    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, ((error, hero2) => {

            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`
        }))
    });

};

/**
 * 
 * @param {String} heroID 
 * @param {(error?: string|Null, hero: Object) => void} callback 
 */
const findHero = (heroID, callback) => {

    const hero = heroes.find(hero => hero.id === heroID);

    if (!hero) {
        callback(`Hero with ID ${heroID} not found`);
        return; // undefined
    }

    callback(null, hero);

}
