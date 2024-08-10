import * as lib from "./lib.js";
import * as user from "./userState.js"

//
const endpoints = {
    LOG: 'users/login',
    REG: 'users/register',
    LOGOUT: 'users/logout',
    CRE: 'data/cars',
    GO: 'data/going',
    GOS: (ev) => `data/going?where=eventId%3D%22${ev}%22&distinct=_ownerId&count`,
    GOS_USER: (ev, user) => `data/going?where=eventId%3D%22${ev}%22%20and%20_ownerId%3D%22${user}%22&count`,
    CAR: (id) => `data/cars/${id}`,
    CARS: 'data/cars?sortBy=_createdOn%20desc',
    SEARCH: (q) => `data/cars?where=model%20LIKE%20%22${q}%22`
};

// get funcs - 

export async function getCars() {
    return await lib.get(url(endpoints.CARS));
}

export async function getCarById(id) {    
    return await lib.get(url(endpoints.CAR(id)));
}

export async function onSearch(data) {   
    const q = encodeURI(data.search) ;
    return await lib.get(url(endpoints.SEARCH(q)));
}

export async function onCre(data, ctx) {
    try {
        const token = user.get().accessToken;
        //
        const res = await lib.post(url(endpoints.CRE), data, token);
        //
        lib.page.redirect('/dashboard');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onEdit(data, id) {
    console.log(`id 3 - ${id}`);

    try {
        const token = user.get().accessToken;
        //
        await lib.put(url(endpoints.CAR(id)), data, token);
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
        await lib.del(url(endpoints.CAR(id)), {}, token);
        //
        lib.page.redirect('/dashboard');
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
    console.log('enter onLog'); 
    
    try {
        const res = await lib.post(url(endpoints.LOG), data);
        console.log(res.ok);
        console.log(res.status);
        
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

