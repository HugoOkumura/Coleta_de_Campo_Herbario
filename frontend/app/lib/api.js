// const API_URL = 'http://backend:5000'
const API_URL = process.env.NEXT_PUBLIC_API_URL 
// const API_URL = NEXT_PUBLIC_API_URL


export const api = {
    async get(endpoint) {
        console.log(API_URL)
        const response = await fetch(`http://localhost:5000/${endpoint}`);
        console.log(response)
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