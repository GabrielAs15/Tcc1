import {con} from "../../connection.js"

export async function listarMarcas() {
    const comando = `
        select id_marca              as id,
               nm_marca             as marca
          from tb_marca
    `

    const [linhas] = await con.query(comando);
    return linhas;
}




export async function buscarMarcaPorId(id) {
    const comando = `
    select id_mara              as id,
           nm_marca             as marca
    from   tb_marca
    where  id_marca = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

