import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function buscaPorNome(nome){
    const resposta = await api.get(`/produto/busca?nome=%${nome}%`);
    return resposta.data; 
}

export async function mostrarTodosProdutos(){
    const resposta = await api.get('/produto/');
    return resposta.data; 
}

export async function removerProduto(id){
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status;
}

export async function BuscaporId(id){
    const resposta = await api.get(`/produto/${id}`);
    return resposta.data
}