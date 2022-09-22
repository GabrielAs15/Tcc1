
import { con } from './connection.js'

export async function login(email, senha){
    const comando = 
    `SELECT ID_LOGIN_ADMIN      id,
            DS_EMAIL            email
     FROM   tb_login_admin
     WHERE  DS_EMAIL       = ?
     AND    DS_SENHA       = ?`

const [linhas] = await con.query(comando, [email, senha])
return linhas[0];
}