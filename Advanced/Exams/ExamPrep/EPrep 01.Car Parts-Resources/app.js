window.addEventListener('load', solve);

function solve() {
        const model = document.querySelector('#car-model');
        const year = document.querySelector('#car-year');
        const name = document.querySelector('#part-name');
        const num = document.querySelector('#part-number');
        const cond = document.querySelector('#condition');
        const img = document.querySelector('#complete-img');
        const pConf = document.querySelector('#complete-text');

        let inputs = [model, year, name, num, cond];

        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list');
        const next = document.querySelector('#next-btn');
        const form = document.querySelector('form');
        form.addEventListener('submit', partInfo);

        function partInfo(e) {
                e.preventDefault();

                if (inputs.some(el => !el.value) || Number(year.value) < 1980 || Number(year.value) > 2023) {
                        return;
                }

                const values = {
                        model: model.value,
                        year: year.value,
                        name: name.value,
                        num: num.value,
                        cond: cond.value
                };

                clearInputs();

                let els = p(values);

                infoList.innerHTML = '';
                const li = document.createElement('li');
                const article = document.createElement('article');
                li.setAttribute('class', 'part-content');

                els.map(el => article.appendChild(el));

                const btnEdit = document.createElement('button');
                const btnContinue = document.createElement('button');
                btnEdit.classList.add('edit-btn');
                btnEdit.textContent = 'Edit';
                btnEdit.addEventListener('click', edit);
                btnContinue.addEventListener('click', cont);
                btnContinue.classList.add('continue-btn');
                btnContinue.textContent = "Continue";

                li.appendChild(article);
                li.appendChild(btnEdit);
                li.appendChild(btnContinue);

                infoList.appendChild(li);

                toggleButtons(true);

                img.style.visibility = 'hidden';
                pConf.textContent = '';
        }

        function edit() {
                const els = Array.from(document.querySelector('article').children);
                inputs.map((inp, i) => {
                        const text = els[i].textContent;
                        const val = text.split(': ')[1];
                        inp.value = val;
                })
                const li = document.querySelector('.part-content');
                infoList.innerHTML = "";
                toggleButtons(false);
        }

        function cont() {
                const li = document.createElement('li');
                li.classList.add('part-content');
                const article = document.querySelector('li article');
                li.appendChild(article);
                infoList.innerHTML = "";

                const btnConf = document.createElement('button');
                const btnCancel = document.createElement('button');
                btnConf.classList.add('confirm-btn');
                btnConf.textContent = 'Confirm';
                btnConf.addEventListener('click', conf);
                btnCancel.addEventListener('click', cancel);
                btnCancel.classList.add('cancel-btn');
                btnCancel.textContent = "Cancel";

                li.appendChild(btnConf);
                li.appendChild(btnCancel);

                confirmList.appendChild(li);
        };

        function conf() {
                confirmList.innerHTML = '';
                img.style.visibility = 'visible';
                pConf.textContent = `Part is Ordered!`;
                toggleButtons(false);
        }

        function cancel() {
                confirmList.innerHTML = '';
                toggleButtons(false);
        }

        function p(values) {

                let p = document.createElement('p');
                p.textContent = `Car Model: ${values.model}`
                let p2 = document.createElement('p');
                p2.textContent = `Car Year: ${values.year}`
                let p3 = document.createElement('p');
                p3.textContent = `Part Name: ${values.name}`
                let p4 = document.createElement('p');
                p4.textContent = `Part Number: ${values.num}`
                let p5 = document.createElement('p');
                p5.textContent = `Condition: ${values.cond}`

                let els = [p, p2, p3, p4, p5];

                return els;
        }

        function toggleButtons(disabled) {
                next.disabled = disabled;
                document.querySelectorAll('.edit-btn, .continue-btn').forEach(btn => btn.disabled = !disabled);
        }

        function clearInputs() {
                model.value = '';
                year.value = '';
                name.value = '';
                num.value = '';
                cond.value = '';
        }
}

