import { listarMarcas } from "../../repository/admin/marcarespository.js";


import { Router } from "express";
const server = Router();


server.get('/api/marcas', async (req, resp) => {
    try {
        const linhas = await listarMarcas();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;