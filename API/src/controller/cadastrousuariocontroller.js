import { cadastroUsuario } from "../repository/cadastrousuariorepository.js";

import { Router } from "express";
const server = Router();

server.post('/usuario/cadastro', async (req, resp)=>{
    try{
        const novoUsuario = req.body;

        if (!novoUsuario.nome)
            throw new Error('Nome obrigatorio');
        if (!novoUsuario.email)
            throw new Error('Email é obrigatorio');
        if (!novoUsuario.celular)
            throw new Error('Celular obrigatorio');
        if (!novoUsuario.cpf)
            throw new Error('Cpf é obrigatorio');
        if (!novoUsuario.senha)
            throw new Error('Senha obrigatoria');
        
    
    
        const user = await cadastroUsuario(novoUsuario);
        resp.send(user);
    } catch(err){
        resp.status(400).send({
            erro: err.message 
        })
     }
})

export default server;