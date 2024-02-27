
import { e } from "./common.js";
import * as api from "./api.js";
import { setCurrentPage } from "./app.js";




export function createRecipeCard(recipe) {
    const editIcon = e('i', { className: 'fas fa-edit' });
    const editButton = e('a', { className: 'recipeBtn', 'data-section': 'edit' }, editIcon, ' Edit');
    const delIcon = e('i', { className: 'fas fa-trash' });
    const delButton = e('a', { className: 'recipeBtn', id: 'del' }, delIcon, ' Delete');

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

    // const recipeBtn = document.querySelector('.recipeBtn');
    // console.log(recipeBtn);
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
        // recipeBtns.forEach(btn => btn.style.display = 'block');
    } else {
        guest.style.display = 'block';
        user.style.display = 'none';
        // recipeBtns.forEach(btn => btn.style.display = 'none');
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

export function toggleVis() {
    let links = document.querySelectorAll('a');
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

// export function toggleVis() {
//     let links = document.querySelectorAll('a');
//     links.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             let sectionId = this.getAttribute('id');
//             let sections = document.querySelectorAll('section');
//             sections.forEach(sec => {
//                 if (`#${sec.id}` === sectionId) {
//                     sec.style.display = 'block';
//                     setCurrentPage(sec.id);
//                 } else {
//                     sec.style.display = 'none';
//                 }
//             })
//         })
//     })
// }


