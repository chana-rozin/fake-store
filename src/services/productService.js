import { fakeStoreHttp, apiHttp } from './http';

export const getJewelry = async () => {
    return (await fakeStoreHttp.get('/jewelery')).data;
};

export const getBooks = async () => {
    return (await apiHttp.get('/books')).data;
};

export const postBook = async (book) => {
    return (await apiHttp.post('/books', book)).data;
};

export const updateBook = async (bookId, updatedBook) => {
    return (await apiHttp.put(`/books/${bookId}`, updatedBook)).data;
};

export const deleteBook = async (bookId) => {
    return (await apiHttp.delete(`/books/${bookId}`)).data;
};