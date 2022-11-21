import { Router } from "express";
import { inserirPagamento, inserirPedido, inserirPedidoItem } from "../../repository/usuario/pedidorepository.js";
import { BuscaporId } from "../../repository/admin/produtorepository.js";
import {  criarNovoPedido } from "../../service/novoProdutoService.js";
const server = Router();



server.post('/api/pedido/:idUsuario/', async (req, resp) => {
    try {
        const { idUsuario } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idUsuario, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await BuscaporId(item.id);
            await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.valor);
        }

        resp.status(204).send();

    }
    catch (err) {
        console.log(err);
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;