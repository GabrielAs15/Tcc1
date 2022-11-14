import {con} from "../../connection.js"

export async function listarDepartamentos() {
    const comando = `
        select id_departamento         as id,
               nm_departamento         as departamento
          from tb_departamento
    `

    const [linhas] = await con.query(comando);
    return linhas;
}



export async function buscarDepartamentoPorId(id) {
    const comando = `
        select id_departamento          id,
               nm_departamento         departamento
          from tb_departamento
         where id_departamento = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}


