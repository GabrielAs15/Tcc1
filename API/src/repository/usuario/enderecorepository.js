import { con } from '../../connection.js'

export async function listarEndereco(idUsuario){
    const comando = `
    
select  ID_USUARIO_ENDERECO    as id,
        DS_ENDERECO			   as endereco,
        NR_NUMERO			   as numero,
        DS_BAIRRO			   as bairro,
        NM_CIDADE			   as cidade,
        NM_ESTADO 			   as estado,
        NR_CEP				   as cep
from    TB_USUARIO_ENDERECO		
where   id_usuario = ?;
  `

  const [registros] = await con.query(comando, [idUsuario]);
  return registros;
}

export async function salvarEndereco(idUsuario, endereco){
    const comando = `
    
    insert into tb_usuario_endereco (id_usuario, ds_endereco, ds_bairro, nm_cidade, nm_estado, nr_numero, nr_cep)
    values (?, ?, ?, ?, ?, ?, ?)
  `

  const [info] = await con.query(comando, [idUsuario, endereco.endereco, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.cep]);
  return info.insertId;
}