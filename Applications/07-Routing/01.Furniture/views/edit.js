import * as lib from '../lib.js';
import { getItemDetails, onUpdate } from '../api/auth.js';


export async function setupEdit({ctx, root, isValid = {}}) {
    const data = await getItemDetails(ctx.params.id);
    const els = templEdit(data, ctx.params.id, isValid);
    lib.render(els, root);
}

function templEdit(data, id, isValid) {
    return lib.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => {onUpdate(e, id)}}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${"form-control" + (isValid.make ? " is-valid" : " is-invalid")} id="new-make" type="text" name="make" .value=${data.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${"form-control" + (isValid.model ? " is-valid" : " is-invalid")} id="new-model" type="text" name="model" .value=${data.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${"form-control" + (isValid.year ? " is-valid" : " is-invalid")} id="new-year" type="number" name="year" .value=${data.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${"form-control" + (isValid.description ? " is-valid" : " is-invalid")} id="new-description" type="text" name="description" .value=${data.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${"form-control" + (isValid.price ? " is-valid" : " is-invalid")} id="new-price" type="number" name="price" .value=${data.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${"form-control" + (isValid.img ? " is-valid" : " is-invalid")} id="new-image" type="text" name="img" .value=${data.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${data.material}>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Edit" />
                </div>
            </div>
        </form>
    `
}