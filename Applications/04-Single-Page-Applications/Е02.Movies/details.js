import { toggleVis } from "./app.js";
import { getLikes, getMovieById, getUserLikes, revokeLike, sendLike } from "./auth.js";
import { btnRouting } from "./app.js";

let like;
let liked;
let likeId; 
let container;
let user;

export async function setupDetails(id) {
    user = localStorage.getItem('userId');
    const userLikes = await getUserLikes(id, user);
    if (userLikes.length > 0) likeId = userLikes.pop()._id;

    const mov = await getMovieById(id);
    toggleVis('movie-example');

    container = document.querySelector('#movie-example .container');

    await detailsTempl(mov, likeId);

    like = document.querySelector('[data-route="like"]');
    liked = document.querySelector('.enrolled-span');

    btnRouting();
    toggleBtns(user, mov, id);
}

async function detailsTempl(mov, likeId) {
    container.innerHTML = `
    <div class="row bg-light text-dark">
    <h1>Movie title: ${mov.title}</h1>
    
    <div class="col-md-8">
    <img
            class="img-thumbnail"
            src=${mov.img}
            alt="Movie"
            />
    </div>
    <div 
    class="col-md-4 text-center"
    data-contain="btns"
    >
        <h3 class="my-3">Movie Description</h3>
        <p>
            ${mov.description}
            </p>
            <a
            class="btn btn-danger"
            data-route="delete"
            data-id=${mov._id}
            href="#"
            >Delete</a
            >
            <a
            class="btn btn-warning"
            data-route="edit"
            data-id=${mov._id}
            href="#"
            >Edit</a
            >
            <a
            class="btn btn-primary"
            data-route="like"
            data-like=${likeId}
            data-id=${mov._id}
            href="#"
            >Like</a
            >
            <span class="enrolled-span"></span>
            </div>
            </div>    
            `;
}

export async function onLike(id) {
    const likeSent = await sendLike(id);
    let likes;
    if (likeSent) {
        likes = await getLikes(id);
    }
    like.dataset.like = likeSent._id;
    liked.style.display = 'block';
    liked.textContent = `Liked ${likes}`;

    btnRouting();
    toggleLikeBtn();
}

export async function onUnlike(id) {
    const user = localStorage.getItem('userId');
    const userLikes = await getUserLikes(id, user);
    const likeId = userLikes.pop()._id;
    await revokeLike(likeId);
    const likes = await getLikes(id);
    liked.style.display = 'block';
    liked.textContent = `Liked ${likes}`;

    toggleLikeBtn();
}

async function toggleBtns(user, mov, id) {
    const displayStatus = user === mov._ownerId ? 'block' : 'none';
    const likes = await getLikes(id);
    const userLikes = await getUserLikes(id, user);
    liked.textContent = `Liked ${likes}`;

    if (user) {
        document.querySelector('[data-route="edit"]').style.display = displayStatus;
        document.querySelector('[data-route="delete"]').style.display = displayStatus;
        if (userLikes.length > 0) {
            liked.style.display = 'block';
            toggleLikeBtn();
        } else {
            liked.style.display = displayStatus;
            like.style.display = displayStatus === 'block' ? 'none' : 'block';
        }
    } else {
        document.querySelector('[data-route="edit"]').style.display = 'none';
        document.querySelector('[data-route="delete"]').style.display = 'none';
        like.style.display = 'none';
        liked.style.display = 'block';
    }
}

function toggleLikeBtn() {
    if (like.textContent === 'Like') {
        like.textContent = 'Unlike';
        like.dataset.route = 'unlike';
    } else {
        like.textContent = 'Like';
        like.dataset.route = 'like';
    }
}
