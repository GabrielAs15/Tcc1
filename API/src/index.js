import 'dotenv/config';

import {con} from './connection.js'
import cors from 'cors';
import express from 'express';

import loginadminController from './controller/admin/loginadmincontroller.js';
import adminprodutoController from './controller/admin/produtocontroller.js';
import admindepartamentoController from  './controller/admin/departamentocontroller.js'
import adminmarcaController from './controller/admin/marcacontroller.js'
import buscarUsuarioController  from './controller/admin/buscarusuariocontroller.js';

import cadastrousuarioController from './controller/usuario/cadastrousuariocontroller.js'
import loginUsuarioController from './controller/usuario/loginusuariocontroller.js';

import produtoController from './controller/usuario/produtocontroller.js'

import enderecoCController from './controller/usuario/enderecocontroller.js'

import pedidoController from './controller/usuario/pedidocontroller.js'
const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/imgProduto', express.static('storage/imgProduto'));

server.use(loginadminController);
server.use(adminprodutoController);
server.use(admindepartamentoController);
server.use(adminmarcaController);
server.use(cadastrousuarioController);
server.use(loginUsuarioController);
server.use(buscarUsuarioController);
server.use(produtoController);
server.use(enderecoCController);
server.use(pedidoController);


server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));