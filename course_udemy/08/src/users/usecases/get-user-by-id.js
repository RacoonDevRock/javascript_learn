import { userToModel } from "../mappers/user.mapper";

export const getUserById = async (id = 1) => {

    const url = `${import.meta.env.VITE_API_URL}/${id}`;

    const data = await fetch(url)
        .then(res => res.json());

    return userToModel(data)
}