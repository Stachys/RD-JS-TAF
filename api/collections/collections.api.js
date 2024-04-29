import baseApi from '../baseApi.js';

export async function createCollection(data) {
    const response = await baseApi.post('collections/', data);

    return response.data;
}
