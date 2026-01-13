import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";
import { User } from "../../models/user";
import { getUserById } from "../../usecases/get-user-by-id";

let modal, form;
let loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {};

    if (!id) return;

    const user = await getUserById(id);
    setFormValue(user);

}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValue = (user) => {
    form.querySelector('input[name="firstName"]').value = user.firstName;
    form.querySelector('input[name="lastName"]').value = user.lastName;
    form.querySelector('input[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}

export const RenderModal = (element, saveUserCallback) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') {
            hideModal()
        }
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userData = { ...loadedUser };

        for (const [key, value] of formData) {
            if (key === "balance") {
                userData[key] = Number(value);
                continue;
            }

            if (key === "isActive") {
                userData[key] = (value === "on") ? true : false;
                continue;
            }

            userData.isActive = form.querySelector('[name="isActive"]').checked;

            userData[key] = value;
        }

        hideModal();
        await saveUserCallback(userData);
    });

    element.append(modal);
};