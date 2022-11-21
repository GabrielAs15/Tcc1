import './index.scss'

import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
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
        <div className='endereços-page'>
            <Cabecalho />
            <div className="barra-pages">
                <p className='black' onClick={irMinhaConta}> Minha Conta</p>
                <p className='text-conta-cliente' onClick={irMeusDados}> Meus dados</p>
                <p className='text-conta-cliente' onClick={irMeusPedidos}> Meus pedidos</p>
                <p className='text-conta-cliente' onClick={irEnderecos}> Endereços</p>
            </div>
            <div className='content-adress'>

                <div className='adress-info'>
                    <div> Rua dos Bobos n°0 </div>
                    <div className='text2'> Liberdade </div>
                </div>
                <div className='adress-country'>
                    <div> São Paulo, SP </div>
                    <div className='text2'> Brasil </div>
                </div>

            </div>
        </div>
    );
}