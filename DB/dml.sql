 --inserir produto
  Insert into tb_produto (nm_produto, vl_preco, qtd_desconto, qtd_estoque, ds_descricao)
  Values (?,?,?,?,?)


-- carga inicial usuário admin
INSERT INTO  tb_login_usuario ( DS_EMAIL, DS_SENHA)
     VALUES ('techexpress@admin.com.br', '1234');

--efetuar login
select ID_USUARIO 		id,
       DS_EMAIL			email
  from  tb_login_usuario
 where DS_EMAIL 		= 'techexpress@admin.com.br'
   and DS_SENHA			= '1234';

select * from tb_login_admin;

INSERT INTO  tb_login_admin( DS_EMAIL, DS_SENHA)
     VALUES ('techexpress@admin.com.br', '1234');