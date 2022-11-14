import axios from 'axios';
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarProdutosHome(){
    const resposta = await api.get('/usuario/produto');
    return resposta.data
}


export async function BuscaporId(id){
    const resposta = await api.get(`/api/produto/${id}`);
    return resposta.data
}

