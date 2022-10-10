import {alterarProduto, BuscaporId, buscaPorNome, inserirProduto, mudarImagem, procurarTodosProdutos, removerProduto, showImage, BuscarImagens} from '../repository/produtorepository.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer({ dest: 'storage/imgProduto' })


server.post('/cadastrarProduto', async (req, resp)=>{
    try{
        const novoProduto = req.body;

        if (!novoProduto.idDepartamento)
            throw new Error('Departamento obrigatorio');
        if (!novoProduto.marca)
            throw new Error('Marca obrigatoria');
        if (!novoProduto.nome)
            throw new Error('Nome obrigatorio');
        if (!novoProduto.valor)
            throw new Error('Valor obrigatorio');
        if (!novoProduto.desconto)
            throw new Error('Desconto obrigatorio');
        if (!novoProduto.estoque)
            throw new Error('Estoque obrigatorio');
        if (!novoProduto.descricao)
            throw new Error('Descrição obrigatoria');

    
    
        const produto = await inserirProduto(novoProduto);
        resp.send(produto);
    } catch(err){
        resp.status(400).send({
            erro: err.message 
        })
     }
})

server.put('/cadastrarProduto/:id/imagem', upload.single('foto') , async (req, resp)=>{
    try{
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await mudarImagem(imagem, id);
        if(resposta != 1)
            throw new Error('A imagem não foi salva');

        resp.status(204).send();
    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/produto/', async (req,resp) =>{
    try{
        const resposta = await procurarTodosProdutos();
        resp.send(resposta)
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});





server.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await buscaPorNome([nome]);
        resp.send(resposta);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/produto/:id', async (req, resp) => {
    try {
        const {id}  = req.params;
        
        const resposta = await removerProduto(id);
        if(resposta != 1)
            throw new Error('Produto não encontrado');
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const produto = req.body;

        if (!produto.idDepartamento)
            throw new Error('Departamento obrigatorio');
        if (!produto.marca)
            throw new Error('Marca obrigatoria');
        if (!produto.nome)
            throw new Error('Nome obrigatorio');
        if (!produto.valor)
            throw new Error('Valor obrigatorio');
        if (!produto.desconto)
            throw new Error('Desconto obrigatorio');
        if (!produto.estoque)
            throw new Error('Estoque obrigatorio');
        if (!produto.descricao)
            throw new Error('Descrição obrigatoria');

        const resposta = await alterarProduto(id, produto);
        if(resposta != 1)
            throw new Error('Esse produto não pode ser alterado');
        else
            resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produto/:id', async (req, resp) => {
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



export default server;