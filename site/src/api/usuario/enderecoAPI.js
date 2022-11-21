import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function salvarEndereco(id_usuario, endereco, bairro, cidade, estado, numero, cep){
    const r = await api.post('/api/usuario/' + id_usuario + '/endereco', {endereco, bairro, cidade, estado, numero, cep} )
    return r.data;
}

export async function listarEndereco(idUsuario){
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco')
    return r.data;
}