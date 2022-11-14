import {con} from "../../connection.js"

export async function buscarUsuario(){
    const comando =  `
    select  nm_usuario,
            nr_celular,
            nr_cpf,
            ds_email
      from  tb_usuario;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}

