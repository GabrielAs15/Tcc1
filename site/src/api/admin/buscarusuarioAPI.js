import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function buscarUsuario(){
    const resposta = await api.get('/buscarusuario/');
    return resposta.data; 
}