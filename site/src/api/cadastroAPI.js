import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastroProduto(idDepartamento, marca, nome, valor, desconto, estoque, descricao){
    const r = await api.post('/cadastrarProduto', {
        idDepartamento: idDepartamento,
        marca: marca,
        nome: nome,
        valor: valor,
        desconto: desconto,
        estoque: estoque,
        descricao: descricao
    });
    return r.data;
}


export async function enviarImagemProduto(id, imagem){
    const formData = new FormData();    
    formData.append('foto', imagem)
    const resposta = await api.put(`/cadastrarProduto/${id}/imagem`, formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}
