import { con } from './connection.js'

export async function cadastroUsuario (usuario){
    const comando = `
    Insert into tb_usuario (nm_usuario, ds_email, nr_celular, nr_cpf, ds_senha)
    Values (?,?,?,?,?) `

    const [resposta] = await con.query(comando,[usuario.nome, usuario.email, usuario.celular, usuario.cpf, usuario.senha])
    return resposta;
}