import { userToModel } from "../mappers/user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param { Number } page
 * @returns  { Promise<User[]> }
 */
export const loadUsersByPage = async (page = 1) => {

    const url = `${import.meta.env.VITE_API_URL}/?_page=${page}`;

    const { data } = await fetch(url)
        .then(res => res.json())

    const users = data.map(user => userToModel(user));

    return users;
}