
import { con } from './connection.js'

export async function login(email, senha){
    const comando = 
    `SELECT ID_USUARIO      id,
         DS_EMAIL         email
     FROM   tb_login_usuario
     WHERE  DS_EMAIL       = ?
     AND    DS_SENHA       = ?`

const [linhas] = await con.query(comando, [email, senha])
return linhas[0];
}