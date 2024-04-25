import baseApi from '../baseApi.js';

export async function createWorkspace(data) {
    const response = await baseApi.post('workspaces/', data);
    
    return response.data;
}

export async function getWorkspace(id) {
    const response = await baseApi.get(`workspaces/${id}`);
    
    return response.data;
}

export async function getAllWorkspaces() {
    const response = await baseApi.get('workspaces/');
    
    return response.data;
}

export async function deleteWorkspace(id) {
    await baseApi.delete(`workspaces/${id}`);
}
