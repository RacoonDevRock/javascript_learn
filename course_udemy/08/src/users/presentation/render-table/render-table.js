import usersStore from '../../store/users-store'
import { deleteUserById } from '../../usecases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css'

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeader, tableBody);
    return table;
}

const tableSelectListener = (event) => {

    const element = event.target.closest('.select-user');

    if (!element) return;

    const id = element.getAttribute('data-id');
    showModal(id);

}

const tableDeleteListener = async (event) => {

    const element = event.target.closest('.delete-user');

    if (!element) return;

    const id = element.getAttribute('data-id');

    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        RenderTable();
    } catch (error) {
        console.error(error);
        alert('No se pudo eliminar')
    }

}

export const RenderTable = (element) => {

    const users = usersStore.getUsers();

    if (!users) return;

    if (!table) {
        table = createTable();
        element.append(table);

        table.addEventListener('click', event => tableSelectListener(event));
        table.addEventListener('click', event => tableDeleteListener(event));

    }

    let tableHTML = '';

    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
                <a hrf="#/" class="select-user" data-id="${user.id}" >Select</a> 
                | 
                <a hrf="#/" class="delete-user" data-id="${user.id}">Delete</a>
            </td>
        </tr>
        `;
    })

    table.querySelector('tbody').innerHTML = tableHTML;

}
