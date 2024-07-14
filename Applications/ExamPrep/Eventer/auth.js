import * as lib from "./lib.js";
import * as user from "./userState.js"


const endpoints = {
    LOG: 'users/login',
    REG: 'users/register',
    LOGOUT: 'users/logout',
    CRE: 'data/events',
    GO: 'data/going',
    GOS: (ev) => `data/going?where=eventId%3D%22${ev}%22&distinct=_ownerId&count`,
    GOS_USER: (ev, user) => `data/going?where=eventId%3D%22${ev}%22%20and%20_ownerId%3D%22${user}%22&count`,
    EVENT: (id) => `data/events/${id}`,
    EVENTS: 'data/events?sortBy=_createdOn%20desc'
};

export async function getEvents() {
    return await lib.get(url(endpoints.EVENTS));
}

export async function getEventById(id) {
    return await lib.get(url(endpoints.EVENT(id)));
}

export async function getGosByEvent(id) {
    return await lib.get(url(endpoints.GOS(id)));
}

export async function getGosByEventForUser(ev, user) {
    return await lib.get(url(endpoints.GOS_USER(ev, user)));
}

export async function onCre(data, ctx) {
    try {
        const token = user.get().accessToken;
        const res = await lib.post(url(endpoints.CRE), data, token);
        lib.page.redirect('/dashboard');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onEdit(data, id) {
    try {
        const token = user.get().accessToken;
        await lib.put(url(endpoints.EVENT(id)), data, token);
        lib.page.redirect(`/details/${id}`);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onDel(id) {

    const token = user.get().accessToken;
    try {
        await lib.del(url(endpoints.EVENT(id)), {}, token);
        lib.page.redirect('/dashboard');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onGo(id) {
    const data = {eventId: id};
    const token = user.get().accessToken;

    try {
        await lib.post(url(endpoints.GO), data, token);
        lib.page.redirect(`/details/${id}`);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onReg(data, ctx) {
    try {
        const res = await lib.post(url(endpoints.REG), data);
        user.set(res);
        lib.page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onLog(data, ctx) {
    try {
        const res = await lib.post(url(endpoints.LOG), data);
        user.set(res);
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
        lib.page.redirect('/home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function url(endpoint) {
    return `http://localhost:3030/${endpoint}`;
}

