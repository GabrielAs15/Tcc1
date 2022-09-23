import axios from 'axios';
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastroProduto(nome, valor, desconto, estoque, descricao){
    const r = await api.post('/cadastro', {
        nome: nome,
        valor: valor,
        desconto: desconto,
        estoque: estoque,
        descricao: descricao,
    });
    return r.data;
}


export async function enviarImagemProduto(id, imagem){
    const formData = new FormData();    

    const resposta = await api.put('/cadastro', formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}
