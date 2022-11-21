import randomString from 'randomstring'

export function criarNotaFiscal() {
    return randomString.generate(11);
}


export function criarNovoPedido(idUsuario, info) {
    
    let agora = new Date();
    let valorFrete = 10.00;
    let notaFiscal = criarNotaFiscal();

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        data: agora,
        notaFiscal: notaFiscal,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'
    }
}