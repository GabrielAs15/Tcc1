import { buscarUsuario } from "../../repository/admin/buscarusuariorepository.js";
import { Router } from 'express'

const server = Router();

server.get('/buscarusuario/', async (req,resp) => {
    try{
        const resposta = await buscarUsuario();
        resp.send(resposta)
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;