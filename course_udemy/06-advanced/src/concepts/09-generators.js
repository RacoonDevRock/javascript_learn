/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());

};


function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';

    return 'no hay mas valores'

}