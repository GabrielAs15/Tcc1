import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

import './index.scss'
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
        <div className='dados-page'>
            <Cabecalho />
            <div className="barra-pages">
                <p className='black' onClick={irMinhaConta}> Minha Conta</p>
                <p className='text-conta-cliente' onClick={irMeusDados}> Meus dados</p>
                <p className='text-conta-cliente' onClick={irMeusPedidos}> Meus pedidos</p>
            </div>
            <div className='título-pmdds'> Altere seus Dados </div>
            <div className='box'>
                <div className='box1'>
                    <input type='text' placeholder='Nome' className='caixa' />
                    <input type='text' placeholder='E-mail' className='caixa' />
                    <input type='text' placeholder='CPF' className='caixa' />
                </div>
                <div className='box2'>
                    <input type='text' placeholder='celular' className='caixa' />
                    <input type='text' placeholder='endereço' className='caixa' />
                    <input type='text' placeholder='bairro' className='caixa' />
                </div>
            </div>
            <button className='change'> Trocar senha </button>
            <hr className='line-button' />

        </div>
    )
}


