

import { Router } from 'express';
import { BuscaporId, BuscarImagens, listarProdutosHome } from '../../repository/admin/produtorepository.js';
const server = Router();    

server.get('/api/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await BuscaporId(id);
        const imagem = await BuscarImagens(id);

        resp.send({
            info: produto,
            imagem: imagem
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/usuario/produto', async (req, resp) => {
    try{

        const linhas = await listarProdutosHome();
        resp.send(linhas);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;