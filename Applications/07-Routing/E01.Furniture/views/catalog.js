import * as lib from '../lib.js';
import { getItems, getUserItems } from '../api/auth.js';


export async function setupCat({root, filter}) {
    let data;
    if (filter) {
        const id = localStorage.getItem('userId');
        data = await getUserItems(id);
    } else {
        data = await getItems();
    }
    const els = templCat(data, filter);
    lib.render(els, root);
}

function templCat(data, filter) {
    return lib.html`
    ${filter ? lib.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
    ` : lib.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
    `}
        <div class="row space-top">
        ${data.map(item => {
        return lib.html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${item.img}"/>
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price}</span></p>
                            </footer>
                            <div>
                                <a href="/details/${item._id}" id=${item._id} class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            `
    })}
    `
}

