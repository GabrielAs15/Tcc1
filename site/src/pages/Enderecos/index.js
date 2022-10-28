import './index.scss'

import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

export default function Index(){

    return(
        <div className='endereços-page'>
            <Cabecalho />
            <div className="navbar">
                <div> Minha Conta </div>
                <div></div>
                <div> Meus Dados </div>
                <div></div>
                <div> Meus Pedidos </div>
                <div></div>
                <div> Endereços </div>
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