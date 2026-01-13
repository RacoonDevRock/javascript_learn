import { modelToUser, userToModel } from "../mappers/user.mapper";
import { User } from "../models/user";

export const saveUser = async (userData) => {

    const user = new User(userData);

    if (!user.firstName || !user.lastName) {
        throw new Error('First & Last name are required');
    }

    const userToSave = modelToUser(user);
    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return userToModel(userUpdated)

};


const createUser = async (user) => {

    const url = `${import.meta.env.VITE_API_URL}`
    const newUser = await fetch(url, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());

    return newUser;

}


const updateUser = async (user) => {

    const url = `${import.meta.env.VITE_API_URL}/${user.id}`
    const updateUser = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());

    console.log(updateUser);


    return updateUser;

}

