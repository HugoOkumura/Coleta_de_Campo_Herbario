// const API_URL = 'http://backend:5000'
const API_URL = process.env.NEXT_PUBLIC_API_URL 
// const API_URL = NEXT_PUBLIC_API_URL


export const api = {
    async get(endpoint) {
        const response = await fetch(`http://localhost:5000/${endpoint}`);
        return await response.json();
    }, // get
    
    async post(endpoint, data) {
        console.log(data)   
        const response = await fetch(`http://localhost:5000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }, // post

    async put(endpoint, data) {
        const response = await fetch(`http://localhost:5000/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
       }, // put

       async delete(endpoint) {
           const config = {
               method: 'DELETE',
               headers: {
                   'Content-Type': 'application/json',
               },
           };

           const response = await fetch(`http://localhost:5000/${endpoint}`, config);
           return await response.json();
       }, // delete
}; // api