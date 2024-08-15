import { html, render, nothing } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';

async function request(url, method, body = {}, token = null) {
  const headers = {};
  const defaultHeaders = { 'Content-Type': 'application/json' };

  if (token) {
    headers['X-Authorization'] = token;
  }

  const ops = {
    method,
    headers: { ...defaultHeaders, ...headers },
    ...(method !== 'GET' && body ? { body: JSON.stringify(body) } : {})
  }

  try {
    const res = await fetch(url, ops);

    let data;

        if (res.status != 204) {
            data = await res.json();
        } 

        if (res.ok == false) {
            if (res.status == 403) {
              localStorage.clear();
            }
            const error = data;
            throw error;
        }

        return data;

  } catch (err) {
    alert(err.message);
    throw err;
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

function isValidEmail(email) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(email);
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
  del,
  isValidEmail
};