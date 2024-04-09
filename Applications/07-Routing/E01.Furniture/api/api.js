export default function createApi() {

    return {

        host(endpoint) {
            return `http://localhost:3030/${endpoint}`;
        },

        getOps(method) {
            const headers = {};
            const ops = { headers, method };
            if (method !== 'GET' && method !== 'DELETE') headers['Content-Type'] = 'application/json';
            const token = localStorage.getItem('userToken');
            if (token) headers['X-Authorization'] = token;
            return ops;
        },

        async request(url, ops) {
            let res;

            try {
                res = await fetch(url, ops);
                if (res.ok) {
                    return await res.json();
                } else {
                    const error = await res.json();
                    console.error("Server responded with an error:", error);
                    throw new Error(error.message);
                }
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return res;
                } else if (err.message == 'Invalid access token') {
                    console.log('Invalid session, resetting storage');
                    localStorage.clear();
                } else {
                    throw err;
                }
            }
        },

        async get(endpoint) {
            return this.request(this.host(endpoint), this.getOps('GET'));
        },

        async post(endpoint, body) {
            const ops = this.getOps('POST');
            ops.body = JSON.stringify(body);

            return this.request(this.host(endpoint), ops);
        },

        async put(endpoint, body) {
            const ops = this.getOps('PUT');
            ops.body = JSON.stringify(body);

            return this.request(this.host(endpoint), ops);
        },

        async delete(endpoint) {
            const ops = this.getOps('DELETE');

            return this.request(this.host(endpoint), ops);
        },
    };
};

