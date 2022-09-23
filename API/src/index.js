import 'dotenv/config';

import {con} from './repository/connection.js'
import cors from 'cors';
import express from 'express';
import usuarioController from './controller/usuarioController.js';
import produtoController from './controller/produtocontroller.js';


const serv = express();
serv.use(cors());   
serv.use(express.json());

serv.use('/storage/imgProduto', express.static('storage/imgProduto'));

serv.use(usuarioController);
serv.use(produtoController);

serv.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));