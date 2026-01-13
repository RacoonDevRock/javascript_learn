import usersStore from '../../store/users-store';
import { RenderTable } from '../render-table/render-table';
import './render-button.css'

export const RenderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const previousButton = document.createElement('button');
    previousButton.innerText = '< Previous';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(previousButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        RenderTable(element);
    });

    previousButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        RenderTable(element);
    });

}
