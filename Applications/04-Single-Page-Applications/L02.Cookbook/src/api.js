
const urlBase = 'http://localhost:3030';

export async function getRecipes() {
    const response = await fetch(`${urlBase}/data/recipes?select=_id%2Cname%2Cimg`);
    const recipes = await response.json();

    return Object.values(recipes);
}

export async function getRecipeById(id) {
    const response = await fetch(`${urlBase}/data/recipes/` + id);
    const recipe = await response.json();

    return recipe;
}

export async function regUserApi(email, password) {
    const method = {
        method: 'POST',
        headers: { 
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {
        const res = await fetch(`${urlBase}/users/register`, method);
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Operation failure');
    }
}

export async function logUserApi(email, password) {
    const method = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {

        const res = await fetch(`${urlBase}/users/login`, method);
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Operation failure');
    }
}

export async function creRecipeApi(data) {
    const method = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json', 
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    try {

        const res = await fetch(`${urlBase}/data/recipes`, method);
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Operation failure: ${err.message}`);
    }
}

export async function updateRecipeApi(data, id) {
    
    console.log(id);
    
    const method = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json', 
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    try {

        const res = await fetch(`${urlBase}/data/recipes/` + id, method);
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Operation failure: ${err.message}`);
    }
}

export async function delRecipeApi(id) {
    const method = {
        method: 'DELETE',
        headers: {
            'X-Authorization': sessionStorage.getItem('token')
        },
    }

    try {
        console.log(sessionStorage.getItem('token'));

        const res = await fetch(`${urlBase}/data/recipes/` + id, method);
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Operation failure: ${err.message}`);
    }
}