import { fakeStoreHttp, apiHttp } from './http';

export const getJewelry = async () => {
    return (await fakeStoreHttp.get('/jewelery')).data;
};

export const getBooks = async () => {
    return (await apiHttp.get('/books')).data;
};
