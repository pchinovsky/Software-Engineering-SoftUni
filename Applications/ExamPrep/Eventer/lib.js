import { html, render, nothing } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';


async function request(url, method, body = {}, token = null) {
  const headers = {};
  const defaultHeaders = { 'Content-Type': 'application/json' };
  if (token) {
    headers['X-Authorization'] = token;
  }
  try {
    const res = await fetch(url, {
      method,
      headers: { ...defaultHeaders, ...headers },
      ...(method !== 'GET' && body ? { body: JSON.stringify(body) } : {})
    });

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(`${res.status} ${res.statusText}: ${errorBody}`);
    }

    if (res.status === 204) {
      return res;
    }

    return await res.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error(`network error or invalid json: ${error.message}`);
    } else if (error.name === 'SyntaxError') {
      console.error(`json parsing error: ${error.message}`);
    } else if (error.message.includes('Failed to fetch')) {
      console.error('request failed. Possibly a network error or CORS issue.');
    } else {
      console.error(`error: ${error.message}`);
    }

    throw error; 
  }
}


async function get(url, token = null) {
  return request(url, 'GET', {}, token);
}

async function post(url, body = {}, token = null) {
  return request(url, 'POST', body, token);
}

async function put(url, body = {}, token = null) {
  return request(url, 'PUT', body, token);
}

async function del(url, body = {}, token = null) { 
  return request(url, 'DELETE', body, token);
}

export {
  html,
  render,
  nothing,
  page,
  request,
  get,
  post,
  put,
  del
};