// lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async get(endpoint) {
    const url = `${API_URL}${endpoint}`;
    console.log('🔍 GET:', url);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao buscar ${endpoint}`);
    return await response.json();
  },

  async post(endpoint, data) {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao cadastrar');
    return await response.json();
  },
};