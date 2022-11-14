
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarDepartamentos() {
    const r = await api.get('/api/departamento');
    return r.data;
}
        