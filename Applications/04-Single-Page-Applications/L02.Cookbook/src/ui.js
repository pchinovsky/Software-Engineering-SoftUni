
import { e } from "./common.js";
import * as api from "./api.js";
import { setCurrentPage } from "./app.js";
import * as auth from "./auth.js";




export function createRecipeCard(recipe) {
    const editIcon = e('i', { className: 'fas fa-edit' });
    const editButton = e('a', { className: 'recipeBtn' }, editIcon, ' Edit');
    editButton.setAttribute('data-section', 'edit');
    editButton.setAttribute('data-id', recipe._id);
    // attaching recipe id to edit button to be available to the onUpdate func
    editButton.addEventListener('click', toggleSections);
    const delIcon = e('i', { className: 'fas fa-trash' });
    const delButton = e('a', { className: 'recipeBtn', id: 'del' }, delIcon, ' Delete');
    delButton.setAttribute('data-id', recipe._id);
    delButton.addEventListener('click', auth.onDel);


    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
        e('div', { className: 'button-container' }, editButton, delButton)
    );

    toggleRecipeBtns();

    return result;
}

export function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await api.getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));

        toggleRecipeBtns();
    }
}

export function navigation() {
    const guest = document.getElementById('guest');
    const user = document.getElementById('user');
    const token = sessionStorage.getItem('token');

    if (token !== null) {
        guest.style.display = 'none';
        user.style.display = 'block';
    } else {
        guest.style.display = 'block';
        user.style.display = 'none';
    }

    toggleRecipeBtns();

}

function toggleRecipeBtns() {
    const token = sessionStorage.getItem('token');
    const recipeBtns = document.querySelectorAll('.recipeBtn');

    if (token !== null) {
        recipeBtns.forEach(btn => btn.style.display = 'block');
    } else {
        recipeBtns.forEach(btn => btn.style.display = 'none');
    }
}

export async function cards() {
    const main = document.querySelector('main');

    const recipes = await api.getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
}

async function toggleSections(e) {
    e.preventDefault();
    let sectionId = this.getAttribute('data-section');
    let sections = document.querySelectorAll('section');

    const recipeId = e.target.dataset.id;
    sessionStorage.setItem('currentRecipeId', recipeId);

    if (e.target.textContent === ' Edit') {
        console.log('=== edit');
        const data = await api.getRecipeById(recipeId);
        populateEdit(data);
    }

    sections.forEach(sec => {
        if (sec.id === sectionId) {
            sec.style.display = 'block';
            setCurrentPage(sec.id);
        } else {
            sec.style.display = 'none';
        }
    })
}

function populateEdit(recipeData) {

    let name = document.querySelector('#editForm [name="name"]');
    let img = document.querySelector('#editForm [name="img"]');
    let ingrs = document.querySelector('#editForm [name="ingredients"]');
    let steps = document.querySelector('#editForm [name="steps"]');

    name.value = recipeData.name;
    img.value = recipeData.img;
    ingrs.value = recipeData.ingredients.join('\n');
    steps.value = recipeData.steps.join('\n');
}

export function toggleVis() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', toggleSections);
    })
}



