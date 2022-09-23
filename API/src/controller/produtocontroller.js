import {inserirProduto, mudarImagem} from '../repository/produtorepository.js'

import {multer} from 'multer'
import {router} from 'express'

const server = Router();
const upload = multer({ dest: 'storage/imgProduto' })

server.post('/cadastrarProduto', async (req, resp)=>{
    try{
        const novoProduto = req.body;

        if (!novoProduto.departamento)
            throw new Error('Departamento obrigatorio');
        if (!novoProduto.marca)
            throw new Error('Marca obrigatoria');
        if (!novoProduto.Nome)
            throw new Error('Nome obrigatorio');
        if (!novoProduto.valor)
            throw new Error('Valor obrigatorio');
        if (!novoProduto.desconto)
            throw new Error('Desconto obrigatorio');
        if (!novoProduto.quantidade)
            throw new Error('Quantidade obrigatorio');
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

export default server;