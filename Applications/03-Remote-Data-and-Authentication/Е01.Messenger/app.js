function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/messenger';
    const send = document.getElementById('submit');
    const refresh = document.getElementById('refresh');
    const messages = document.getElementById('messages');
    const authorEl = document.querySelector('input[name="author"]');
    const contentEl = document.querySelector('input[name="content"]');

    send.addEventListener('click', onSend);
    refresh.addEventListener('click', onRefresh);

    async function onSend() {
        try {
            const author = authorEl.value;
            const content = contentEl.value;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ author, content })
            });
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }

    async function onRefresh() {
        try {
            const res = await fetch(url, { method: 'GET' });
            const data = await res.json();
            const messagesArray = [];
            for (const mess in data) {
                messagesArray.push(`${data[mess].author}: ${data[mess].content}`);
            }
            messages.textContent = messagesArray.join('\n');
        } catch (error) {
            console.log(`Operation failure: ${error.message}`);
        }
    }
    
}
window.addEventListener('DOMContentLoaded', attachEvents);