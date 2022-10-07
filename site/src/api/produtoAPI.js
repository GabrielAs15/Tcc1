import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function mostrarTodosPedidos(){
    const resposta = await api.get('/pedidos/');
    return resposta.data; 
}

export async function buscaPorNome(nome){
    const resposta = await api.get(`/pedidos/busca?nome${nome}`);
    return resposta.data; 
}