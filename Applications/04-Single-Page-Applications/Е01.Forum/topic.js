import { request } from "./lib.js";

const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
const formComment = document.querySelector('form#newComment');
const comment = document.querySelector('.comment');
const name = document.querySelector('.theme-name>h2');
formComment.addEventListener('submit', onSubmit);

let topicId = null;
let postStr = '';

export function showTopic(post) {
    topicId = post._id;
    name.textContent = post.topicName;
    topic.style.display = 'block';
    home.style.display = 'none';

    postStr = postTempl(post);
    comment.innerHTML = postStr;
    loadComments();
}

async function onSubmit(e) {
    e.preventDefault();
    const date = new Date().toUTCString();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [key, value.trim()])
    );
    const empty = Array.from(formData.entries()).some(([key, val]) => !val);
    if (empty) {
        alert('Please fill all input fields');
        return;
    }

    data.date = date;
    data.topicId = topicId;
    try {
        await request(url, 'POST', { body: data });
        formComment.reset();
        loadComments();
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

async function loadComments() {
    comment.innerHTML = postStr;
    const comments = await getComments();
    Object.values(comments).map(com => {
        if (com.topicId === topicId) commentTempl(com);
    });
}

async function getComments() {
    try {
        const data = await request(url, 'GET');
        return data;
    } catch (error) {
        console.log(`Operation failure: ${error.message}`);
    }
}

function commentTempl(com) {
    comment.innerHTML += `
    <div id="user-comment">
    <div class="topic-name-wrapper">
      <div class="topic-name">
        <p>
          <strong>${com.username}</strong> commented on
          <time>${com.date}</time>
        </p>
        <div class="post-content">
          <p>${com.postText}</p>
        </div>
      </div>
    </div>
  </div>
    `
}

function postTempl(post) {
    return `
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>${post.username}</span> posted on <time>${post.date}</time></p>

        <p class="post-content">${post.postText}</p>
    </div>
    `
}