import createApi from './api.js';
import { goTo, updateNav } from './app.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    MOV: 'data/movies',
    MOV_COUNT: 'data/movies?count',
    ADD: 'data/movies',
    UPD: (id) => `data/movies/${id}`,
    DEL: (id) => `data/movies/${id}`,
    LIKES: (id) => `data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`,
    LIKES_USER: (id, userId) => `data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`,
    LIKE: `data/likes`,
    LIKE_REVOKE: (id) => `data/likes/${id}`,
    REG: 'users/register',
    LOG: 'users/login',
    LOGOUT: 'users/logout'
};


// no pagination - 
// export async function getMovies() {
//     return await api.get(endpoints.MOV);
// }
// pagination - 
// func returns items for 1 page and all items count
// for this server api '?count' query param gives the count
// offset and pageSize gives where to start and how many items to give, based on default page 1 arg. at which ind to start - 
// if page 1 - start from el 0; if page 2 - start from el 5. 
export async function getMovies(page = 1, pageSize = 5) {
    const offset = (page - 1) * pageSize;
    const movies = await api.get(`${endpoints.MOV}?offset=${offset}&pageSize=${pageSize}`);
    const count = await api.get(endpoints.MOV_COUNT);
    return {
        movies,
        count
    }
}


export async function getMovieById(id) {
    return await api.get(endpoints.MOV + `/${id}`);
}

export async function getLikes(id) {
    return await api.get(endpoints.LIKES(id));
}

export async function getUserLikes(id, userId) {
    return await api.get(endpoints.LIKES_USER(id, userId));
}



// // obj needed, no bool, so that each input in the form can be validated separately, not the whole form as one. 
// export let isValid = {
//     make: true,
//     model: true,
//     description: true,
//     year: true,
//     price: true,
//     img: true,
// };

export async function onUpdate(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        await api.put(endpoints.UPD(id), data);
        goTo('details', id);
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onAdd(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (Object.values(data).some(field => field == '')) {
        alert('Please fill all fields');
        return;
    }
    try {
        await api.post(endpoints.ADD, data);
        e.target.reset();
        goTo('home');
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onDel(id) {
    const ok = confirm('Are you sure you want to delete thie item?');
    if (ok) {
        await api.delete(endpoints.DEL(id));
        goTo('home');
    }
}

export async function sendLike(id) {
    try {
        return await api.post(endpoints.LIKE, { movieId: id });
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function revokeLike(id) {
    try {
        await api.delete(endpoints.LIKE_REVOKE(id));
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onReg(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if (Object.values(data).some(field => field == '')) {
        alert('Please fill all fields');
        return;
    }
    if (data.password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    if (data.repeatPassword !== data.password) {
        alert('Please ensure passwords match');
        return;
    }
    try {
        const res = await api.post(endpoints.REG, data);
        localStorage.setItem('userToken', res.accessToken);
        localStorage.setItem('userId', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('pass', res.password);
        e.target.reset();
        goTo('home');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

export async function onLog(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const res = await api.post(endpoints.LOG, data);
        localStorage.setItem('userToken', res.accessToken);
        localStorage.setItem('userId', res._id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('pass', res.password);
        goTo('home');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
        alert('Incorrect email or password');
        e.target.reset();
    }
}

export async function onLogout() {
    try {
        await api.get(endpoints.LOGOUT);
        localStorage.clear();
        goTo('login');
        updateNav();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}





