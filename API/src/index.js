import 'dotenv/config';

import {con} from './repository/connection.js'
import cors from 'cors';
import express from 'express';
import usuarioController from './controller/loginadmincontroller.js';
import produtoController from './controller/produtocontroller.js';
import departamentoController from  './controller/departamentocontroller.js'
import marcaController from './controller/marcacontroller.js'
import cadastrousuarioController from './controller/cadastrousuariocontroller.js'
import loginUsuarioController from './controller/loginusuariocontroller.js';
const server = express();
server.use(cors());   
server.use(express.json());

server.use('/storage/imgProduto', express.static('storage/imgProduto'));

server.use(usuarioController);
server.use(produtoController);
server.use(departamentoController);
server.use(marcaController);
server.use(cadastrousuarioController);
server.use(loginUsuarioController);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));