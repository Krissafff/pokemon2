import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/generation/'
});

export default api;