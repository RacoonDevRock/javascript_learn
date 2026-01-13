import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { RenderButtons } from "./presentation/render-buttons/render-button";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./usecases/save-user";

export const UsersApp = async (element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

    element.innerHTML = '';
    RenderTable(element);
    RenderButtons(element);
    RenderAddButton(element);
    RenderModal(element, async (userData) => {
        const user = await saveUser(userData);
        console.log(user);

        usersStore.onUserChanged = user;
        RenderTable();
    });

}