import * as lib from "./lib.js";
import * as user from "./userState.js"

//
const endpoints = {
    LOG: 'users/login',
    REG: 'users/register',
    LOGOUT: 'users/logout',
    CRE: 'data/tattoos',
    LIKE: 'data/likes',
    LIKES: (id) => `data/likes?where=tattooId%3D%22${id}%22&distinct=_ownerId&count`,
    LIKES_USER: (id, user) => `data/likes?where=tattooId%3D%22${id}%22%20and%20_ownerId%3D%22${user}%22&count`,
    TAT: (id) => `data/tattoos/${id}`,
    TATS: 'data/tattoos?sortBy=_createdOn%20desc'
};

// get funcs - 

export async function getTats() {
    return await lib.get(url(endpoints.TATS));
}

export async function getTatById(id) {
    return await lib.get(url(endpoints.TAT(id)));
}

export async function getLikesByTat(id) {
    return await lib.get(url(endpoints.LIKES(id)));
}

// returns 1/0
export async function getLikesByTatForUser(id, user) {
    return await lib.get(url(endpoints.LIKES_USER(id, user)));
}

export async function onCre(data, ctx) {
    const dataDone = {
        type: data.type,
        imageUrl: data["image-url"],
        description: data.description,
        userType: data["user-type"]
    }
    try {
        const token = user.get().accessToken;
        //
        const res = await lib.post(url(endpoints.CRE), dataDone, token);
        //
        lib.page.redirect('/dashboard');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onEdit(data, id) {
    const dataDone = {
        type: data.type,
        imageUrl: data["image-url"],
        description: data.description,
        userType: data["user-type"]
    }
    try {
        const token = user.get().accessToken;
        //
        await lib.put(url(endpoints.TAT(id)), dataDone, token);
        //
        lib.page.redirect(`/details/${id}`);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onDel(id) {

    const token = user.get().accessToken;
    try {
        //
        await lib.del(url(endpoints.TAT(id)), {}, token);
        //
        lib.page.redirect('/dashboard');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

// BONUS - 

export async function onLike(id) {
    const data = { tattooId: id };
    const token = user.get().accessToken;

    try {
        await lib.post(url(endpoints.LIKE), data, token);
        lib.page.redirect(`/details/${id}`);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}


// auth funcs - 


export async function onReg(data, ctx) {
    try {
        const res = await lib.post(url(endpoints.REG), data);
        user.set(res);
        //
        lib.page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onLog(data, ctx) {
    try {
        const res = await lib.post(url(endpoints.LOG), data);
        user.set(res);
        //
        lib.page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
        return;
    }
}

export async function onLogout() {
    const token = user.get().accessToken;

    try {
        const res = await lib.get(url(endpoints.LOGOUT), token);
        localStorage.clear();
        //
        lib.page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

//

function url(endpoint) {
    return `http://localhost:3030/${endpoint}`;
}

