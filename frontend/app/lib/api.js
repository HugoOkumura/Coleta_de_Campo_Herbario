const API_URL = 'http://localhost:5000'

export const api = {

    async get(endpoint) {
        const response = await fetch(`${API_URL}${endpoint}`);
        return await response.json();
    }, // get
    
    async post(endpoint, data) {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }, // post

    // outros métodos (put, delete) para fazer

}; // api