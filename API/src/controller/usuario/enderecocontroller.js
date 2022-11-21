
import { Router } from "express";
import { listarEndereco, salvarEndereco } from "../../repository/usuario/enderecorepository.js";
const server = Router();

server.get('/api/usuario/:id/endereco', async (req, resp) => {
    try{
        const id = req.params.id
        const r = await listarEndereco(id);
        resp.send(r);


    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/usuario/:id/endereco', async (req, resp) => {
    try{
        const endereco = req.body;
        const id = req.params.id

        const r = await salvarEndereco(id, endereco)
        resp.status(204).send();
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;