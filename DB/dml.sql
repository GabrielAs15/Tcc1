 select id_usuario               id,
        nm_usuario             nome
 from   tb_login_usuario    
  join  tb_usuario
    on  tb_login_usuario.id_usuario = tb_usuario.id_usuario
 where  ds_email = ?
   and  ds_senha = ?



