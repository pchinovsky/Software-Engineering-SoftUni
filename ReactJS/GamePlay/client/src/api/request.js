import { useContext } from "react";

function host(endpoint) {
    return `http://localhost:3030/${endpoint}`;
}

function getOps(method, skipAuth = false) {
    const headers = {};
    const ops = { headers, method };
    if (method !== 'GET' && method !== 'DELETE') headers['Content-Type'] = 'application/json';
    const token = localStorage.getItem('authToken');
    // if (token) headers['X-Authorization'] = token;
    if (!skipAuth) {
        const token = localStorage.getItem('authToken');
        if (token) headers['X-Authorization'] = token;
    }
    return ops;
}

async function request(url, ops) {
    let res;

    try {
        res = await fetch(url, ops);
        if (res.ok) {
            return await res.json();
        } else {
            const error = await res.json();
            console.error("Server responded with an error:", error);
            throw new Error(error.message);
        }
    } catch (err) {
        if (err instanceof SyntaxError) {
            return res;
        } else if (err.message == 'Invalid access token') {
            // console.log('Invalid session, resetting storage');
            // localStorage.clear();
            // window.location.pathname = '/';
            // adapt redirection when needed.
        } else {
            throw err;
        }
    }
}

async function get(endpoint) {
    return request(host(endpoint), getOps('GET'));
}

async function post(endpoint, body, skipAuth = false) {
    console.log('skip auth in post req - ', skipAuth);

    const ops = getOps('POST', skipAuth);
    ops.body = JSON.stringify(body);

    console.log('ops in post req - ', ops);


    return request(host(endpoint), ops);
}

async function put(endpoint, body) {
    const ops = getOps('PUT');
    ops.body = JSON.stringify(body);

    return request(host(endpoint), ops);
}

async function del(endpoint) {
    const ops = getOps('DELETE');

    return request(host(endpoint), ops);
}

export default {
    get,
    post,
    put,
    del
}