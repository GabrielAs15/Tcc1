import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

import './index.scss'

export default function Index(){
    return(
        <div className='dados-page'> 
            <Cabecalho />
            <div>
                <div> Minha Conta </div>
                <div></div>
                <div> Meus Dados </div>
                <div></div>
                <div> Meus Pedidos </div>
                <div></div>
                <div> Endereços </div>
            </div>
            <div className='box'>
                <div className='box1'>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                </div>
                <div className='box2'>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                </div>                      
            </div>
        </div>
    )
}