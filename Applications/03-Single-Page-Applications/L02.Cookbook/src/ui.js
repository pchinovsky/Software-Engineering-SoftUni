
import { e } from "./common.js";
import { getRecipeById } from "./api.js";
import { getRecipes } from "./api.js";
import { setCurrentPage } from "./app.js";




export function createRecipeCard(recipe) {
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
    );

    return result;
}

export function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
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

}

export async function cards() {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
}

export function toggleVis() {
    let links = document.querySelectorAll('a[data-section]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let sectionId = this.getAttribute('data-section');
            let sections = document.querySelectorAll('section');
            sections.forEach(sec => {
                if (sec.id === sectionId) {
                    sec.style.display = 'block';
                    setCurrentPage(sec.id);
                } else {
                    sec.style.display = 'none';
                }
            })
        })
    })
}


