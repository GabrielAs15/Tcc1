import {con} from "../../connection.js"

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

export async function buscaPorNome(nome){
    const comando = `
    select tb_produto.id_produto,
	   nm_produto,
       vl_produto,
       vl_desconto,
       qtd_estoque,
       ds_produto,
       nm_departamento,
       nm_marca
from   tb_produto
inner join tb_departamento on tb_produto.id_departamento = tb_departamento.id_departamento
inner join tb_marca on tb_produto.id_marca = tb_marca.id_marca      
       WHERE nm_produto   like   ? `;
    
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;          
    
}

export async function showImage(produtos){
    const comando = `
    SELECT IMG_PRODUTO
    FROM tb_produto
    WHERE ID_PRODUTO = ?`
    const [linhas] = await con.query(comando, [produtos.id]);
    return linhas;
}

export async function   procurarTodosProdutos() { 
    const comando = `
    select tb_produto.id_produto,
	   nm_produto,
       vl_produto,
       vl_desconto,
       qtd_estoque,
       ds_produto,
       nm_departamento,
       nm_marca
from   tb_produto
inner join tb_departamento on tb_produto.id_departamento = tb_departamento.id_departamento
inner join tb_marca on tb_produto.id_marca = tb_marca.id_marca
group 
   by tb_produto.id_produto,
	   nm_produto,
       vl_produto,
       vl_desconto,
       qtd_estoque,
       ds_produto,
       nm_departamento,
       nm_marca;
       `; 
    
    const [linhas] = await con.query(comando);
    return linhas;


}

export async function removerProduto(id){
    const comando = 
    ` DELETE FROM tb_produto
            WHERE ID_PRODUTO = ? 
    `;
 
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;           
}   

export async function alterarProduto(id, produto){
    const comando = 
    `UPDATE tb_produto
        SET nm_produto      = ?,
            vl_produto      = ?,
            vl_desconto     = ?,
            qtd_estoque     = ?,
            ds_produto      = ?,
            id_departamento = ?,
            id_marca        = ?
     WHERE  id_produto  = ?`

    const [resposta] = await con.query(comando, [produto.nome, produto.valor, produto.desconto, produto.valorDesc, produto.estoque, produto.descricao, produto.departamento, produto.marca, id])
    return resposta.affectedRows;
}

export async function BuscaporId(id){
    const comando = `
    select      id_produto      as  id, 
	            nm_produto      as  nome,
                vl_produto      as  valor,
                vl_desconto     as  desconto,
                qtd_estoque     as  estoque,
                ds_produto      as  descricao,
                nm_departamento as departamento,
                id_marca        as  marca
	 from      tb_produto    
     inner join tb_departamento on tb_departamento.nm_departamento = tb_departamento.nm_departamento
    WHERE      id_produto = ?
     `
    
       const [linhas] = await con.query(comando, [id]);
       return linhas[0];
}

export async function BuscarImagens(id){
    const comando = `
    SELECT  img_produto as imagem
      FROM  tb_produto
     WHERE  id_produto = ?`

     const [linhas] = await con.query(comando, [id]);
     return linhas;

}

export async function listarProdutosHome(){
    const comando = `
        select  tb_produto.id_produto,
                nm_produto        as  nome,
                vl_produto        as  valor,
                vl_desconto       as  desconto,
                img_produto       as  imagem
        from    tb_produto
    `
    const [registro] = await con.query(comando);
    return registro;
}