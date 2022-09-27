import {con} from "./connection.js"

export async function inserirProduto(produto){
    const comando =
    `
    Insert into tb_produto ( ID_DEPARTAMENTO, ID_MARCA, NM_PRODUTO, VL_PRODUTO, VL_DESCONTO, QTD_ESTOQUE, DS_PRODUTO)
             Values (?,?,?,?,?,?,?)
    `
    const [resposta] = await con.query(comando,[produto.idDepartamento, produto.marca, produto.nome, produto.valor, produto.desconto, produto.estoque, produto.descricao])
    produto.id = resposta.insertId;
    return produto;
}


export async function mudarImagem(imagem,id){
    const comando =
    `
        update  tb_produto
        set     IMG_PRODUTO = ?
        where   ID_PRODUTO = ?
    `;
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}