CREATE DATABASE techexpress_db;
USE techexpress_db;

CREATE TABLE tb_usuario(
ID_USUARIO			INT PRIMARY KEY AUTO_INCREMENT,
NM_USUARIO			VARCHAR(100),
NR_CELULAR			INT,
NR_CPF				INT
);

CREATE TABLE tb_login_usuario(
ID_LOGIN			INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO			INT,
DS_EMAIL			VARCHAR(100),
DS_SENHA			VARCHAR(10),
FOREIGN KEY (ID_USUARIO) REFERENCES tb_usuario (ID_USUARIO)
);

CREATE TABLE tb_usuario_endereco(
ID_USUARIO_ENDERECO			INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO					INT,
DS_ENDERECO					VARCHAR(100),
NR_NUMERO					INT,
DS_BAIRRO					VARCHAR(100),
NM_CIDADE					VARCHAR(100),
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);

CREATE TABLE tb_marca (
ID_MARCA			INT PRIMARY KEY AUTO_INCREMENT,
NM_MARCA			VARCHAR(100)
);

CREATE TABLE tb_departamento(
ID_DEPARTAMENTO		INT PRIMARY KEY AUTO_INCREMENT,
NM_DEPARTAMENTO		VARCHAR(100)
);

CREATE TABLE tb_produto(
ID_PRODUTO			INT PRIMARY  KEY AUTO_INCREMENT,
ID_DEPARTAMENTO		INT,
ID_MARCA			INT,
NM_PRODUTO			VARCHAR(100),
VL_PRODUTO			DECIMAL(15,2),
VL_DESCONTO			INT,
QTD_ESTOQUE			INT,
DS_PRODUTO			VARCHAR(500),
IMG_PRODUTO			VARCHAR(700),
FOREIGN KEY (ID_MARCA) REFERENCES TB_MARCA (ID_MARCA),
FOREIGN KEY (ID_DEPARTAMENTO) REFERENCES TB_DEPARTAMENTO (ID_DEPARTAMENTO)
);

CREATE TABLE tb_pedido (
ID_PEDIDO			INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO					INT,
DS_STATUS			VARCHAR(100),
TP_PAGAMENTO		BOOL,
VL_FRETE			INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO(ID_USUARIO)
);

CREATE TABLE tb_pedido_item(
ID_PEDIDO_ITEM		INT PRIMARY KEY AUTO_INCREMENT,
ID_PEDIDO			INT,
ID_PRODUTO			INT,
QTD_PRODUTO			INT,
FOREIGN KEY (ID_PRODUTO) REFERENCES TB_PRODUTO (ID_PRODUTO),
FOREIGN KEY (ID_PEDIDO) REFERENCES TB_PEDIDO (ID_PEDIDO)
);

CREATE TABLE tb_login_admin(
ID_LOGIN_ADMIN 			INT PRIMARY KEY AUTO_INCREMENT,
DS_EMAIL				VARCHAR(100),
DS_SENHA				VARCHAR(10)
);