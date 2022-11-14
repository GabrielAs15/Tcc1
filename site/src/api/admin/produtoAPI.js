import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function buscaPorNome(nome){
    const resposta = await api.get(`/admin/produto/busca?nome=%${nome}%`);
    return resposta.data; 
}

export async function mostrarTodosProdutos(){
    const resposta = await api.get('/admin/produto/');
    return resposta.data; 
}

export async function removerProduto(id){
    const resposta = await api.delete(`/admin/produto/${id}`);
    return resposta.status;
}

export async function BuscaporId(id){
    const resposta = await api.get(`/admin/produto/${id}`);
    return resposta.data
}