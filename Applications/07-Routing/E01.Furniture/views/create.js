import * as lib from '../lib.js';
import { onCre } from '../api/auth.js';


export function setupCre(root, isValid = {}) {
    const data = templCre(isValid);
    lib.render(data, root);
}

function templCre(isValid) {
    return lib.html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onCre}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class=${"form-control" + (isValid.make ? " is-valid" : " is-invalid")} id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class=${"form-control" + (isValid.model ? " is-valid" : " is-invalid")} id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class=${"form-control" + (isValid.year ? " is-valid" : " is-invalid")} id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class=${"form-control" + (isValid.description ? " is-valid" : " is-invalid")} id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class=${"form-control" + (isValid.price ? " is-valid" : " is-invalid")} id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class=${"form-control" + (isValid.img ? " is-valid" : " is-invalid")} id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    `
}