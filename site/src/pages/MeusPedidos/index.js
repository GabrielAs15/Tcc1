import './index.scss'

import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Box from '../../components/PedidoProduto/index.js'
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();
    function irMeusPedidos() {
        navigate('/MeusPedidos')
    }

    function irMeusDados() {
        navigate('/MeusDados')
    }
    function irMinhaConta() {
        navigate('/MinhaConta')
    }
    function irEnderecos() {
        navigate('Endereços')
    }


    return (
        <main className='Page'>
            <Cabecalho className='comp' />
            <div className='barra-pages'>
                <p className='text-conta-cliente' onClick={irMinhaConta}> Minha Conta</p>
                <p className='text-conta-cliente' onClick={irMeusDados}> Meus dados</p>
                <p className='black' onClick={irMeusPedidos}> Meus pedidos</p>
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
            <div>
                <Box />
            </div>
        </main>
    )
}