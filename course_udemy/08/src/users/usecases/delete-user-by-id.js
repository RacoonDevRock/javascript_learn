
export const deleteUserById = async (id) => {

    const url = `${import.meta.env.VITE_API_URL}/${id}`
    const deleteUser = await fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json());

    console.log({deleteUser});

    return true;
}
