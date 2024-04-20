import { request } from "./lib.js";
import { showTopic } from "./topic.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const home = document.getElementById('home');
const homeBtn = document.getElementById('homeBtn');
const topic = document.getElementById('topic');
const form = document.querySelector('form#newTopic');
const cancel = document.querySelector('.cancel');
const topics = document.querySelector('.topic-container');
form.addEventListener('submit', onSubmit);
cancel.addEventListener('click', onCancel);
homeBtn.addEventListener('click', showHome);



function showHome() {
    home.style.display = 'block';
    topic.style.display = 'none';
    loadTopics();
}

async function loadTopics() {
    try {
        const data = await request(url, 'GET');
        // replaceChildren accepts multiple args (div1, div2), so spread oper gives separate divs, instead of an arr of divs. 
        topics.replaceChildren(...Object.values(data).map(post => topicTemplHome(post)));

    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

async function onSubmit(e) {
    e.preventDefault();
    const date = new Date().toUTCString();
    const formData = new FormData(e.target);
    // to trim all data points. 
    const data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [key, value.trim()])
    );
    const empty = Array.from(formData.entries()).some(([key, val]) => !val);
    if (empty) {
        alert('Please fill all input fields');
        return;
    }
    data.date = date;
    try {
        await request(url, 'POST', { body: data });
        form.reset();
        loadTopics();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function onCancel(e) {
    e.preventDefault();
    form.reset();
}

function topicTemplHome(post) {
    let div = document.createElement('div');
    div.id = post._id;
    div.classList.add('topic-name-wrapper');
    div.innerHTML = `
    <div class="topic-name">
        <a href="javascript:void(0)" class="normal">
            <h2>${post.topicName}</h2>
        </a>
        <div class="columns">
            <div>
                <p>Date: <time>${post.date}</time></p>
                <div class="nick-name">
                    <p>Username: <span>${post.username}</span></p>
                </div>
            </div>


        </div>
    </div>
    `
    div.querySelector('a').addEventListener('click', () => showTopic(post));
    return div;
}
window.addEventListener('DOMContentLoaded', showHome);


