import axios from 'axios';
const api= axios.create({
    baseURL: 'http://localhost:5000'
})


export async function salvarNovoPedido(idUsuario, novoPedido) {
    const r = await api.post('/api/pedido/' + idUsuario, novoPedido);
    return r.data;
}

