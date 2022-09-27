import { buscarDepartamentoPorId } from "../repository/departamentoRepository.js";


export async function validarProduto(produto) {
    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (isNaN(produto.preco) || produto.preco <= 0) {
        throw new Error('Preço do produto é obrigatório!');
    }
    else if (produto.destaque == undefined) {
        throw new Error('Destaque é obrigatório!');
    }

    const dep = await buscarDepartamentoPorId(produto.idDepartamento);
    if (dep == undefined) {
        throw new Error('Departamento inválido');
    }

}

