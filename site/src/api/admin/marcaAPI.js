import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarMarcas() {
    const r = await api.get('/api/marcas');
    return r.data;
}

