 --inserir produto
  Insert into tb_produto (nm_produto, vl_preco, qtd_desconto, qtd_estoque, ds_descricao)
  Values (?,?,?,?,?)


 
 select id_usuario               id,
        nm_usuario             nome
 from   tb_login_usuario    
  join  tb_usuario
    on  tb_login_usuario.id_usuario = tb_usuario.id_usuario
 where  ds_email =  'admin@gmail.com'
   and  ds_senha =  '1234'


--produto
