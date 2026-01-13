import { showModal } from '../render-modal/render-modal';
import './render-add-button.css'

export const RenderAddButton = (element) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+'
    fabButton.classList.add('fab-button');

    element.append(fabButton)

    fabButton.addEventListener('click', () => {
        showModal()
    })

}
