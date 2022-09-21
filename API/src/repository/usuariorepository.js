
import { con } from './connection.js'

export async function login(email, senha){
    const comando = 
    `SELECT id_usuario       id,
            ds_email         email
     FROM   tb_login
     WHERE  ds_email       = ?
     AND    ds_senha       = ?`

const [linhas] = await con.query(comando, [email, senha])
return linhas[0];
}