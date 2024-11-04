import axios from 'axios';

export const fakeStoreHttp = axios.create({
    baseURL: 'https://fakestoreapi.com/products/category',
});

export const apiHttp = axios.create({
    baseURL: '/api/products',  // Adjust this depending on your API path
});
