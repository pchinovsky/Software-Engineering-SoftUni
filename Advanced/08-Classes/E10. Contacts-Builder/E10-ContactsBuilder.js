class Contact {
    constructor(firstName, lastName, phone, email) {
        Object.assign(this, {
            firstName,
            lastName,
            phone,
            email,
            _online: false
        })
    }
    get online() {
        return this._online;
    }
    set online(bool) {
        if (this.hasOwnProperty('title')) {
            if (bool) {
                this.title.classList.add('online');
            } else {
                this.title.classList.remove('online');
            }   
        }
        this._online = bool;
    }
    render(id) {
        const main = document.getElementById(id);
        const article = document.createElement('article');
        const button = document.createElement('button');
        this.title = document.createElement('div');
        const info = document.createElement('div');
        info.style.display = 'none';
        const phone = document.createElement('span');
        const email = document.createElement('span');

        this.title.classList.add('title');

        this.online ? this.title.classList.add('online') : this.title.classList.remove('online');

        info.classList.add('info');
        button.innerHTML = '&#8505;'
        phone.innerHTML = '&#9742;';
        email.innerHTML = '&#9993;';

        this.title.textContent = `${this.firstName} ${this.lastName}`;
        phone.textContent += ` ${this.phone}`;
        email.textContent += ` ${this.email}`;

        button.addEventListener('click', () => {
            info.style.display = info.style.display === 'none' ? 'block' : 'none';
        });

        info.appendChild(phone);
        info.appendChild(email);
        this.title.appendChild(button);
        article.appendChild(this.title);
        article.appendChild(info);

        main.appendChild(article);

    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
