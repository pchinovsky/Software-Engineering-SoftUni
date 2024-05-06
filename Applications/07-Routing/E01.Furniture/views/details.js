import * as auth from '../api/auth.js';
import * as lib from '../lib.js';


export async function setupDetails(ctx, root) {
    const data = await auth.getItemDetails(ctx.params.id);
    const els = templDetails(data, ctx.params.id, auth.onDel);
    lib.render(els, root);
}

function templDetails(data, id, func) {
    console.log(id);
    const user = localStorage.getItem('userId') === data._ownerId;
    return lib.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="/images/chair.jpg" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price}</span></p>
                <p>Material: <span>${data.material}</span></p>
            ${user? lib.html`
            <div>
                    <a href="/edit/${id}" class="btn btn-info">Edit</a>
                    <a @click=${() => {func(id)}} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>
            ` : lib.nothing}
            </div>
        </div>
    `
}