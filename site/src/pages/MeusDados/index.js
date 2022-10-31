import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

import './index.scss'

export default function Index(){
    return(
        <div className='dados-page'> 
            <Cabecalho />
            <div className="navbar">
                <div className='texto-nav'> Minha Conta </div>
                <div>|</div>
                <div className='texto-nav' > Meus Dados </div>
                <div>|</div>
                <div className='texto-nav'> Meus Pedidos </div>
                <div>|</div>
                <div className='texto-nav'> Endereços </div>
            </div>
            <div className='título-pmdds'> Altere seus Dados </div>
            <div className='box'>
                <div className='box1'>
                    <input type='text' placeholder='Nome' className='caixa'/>
                    <input type='text' placeholder='E-mail' className='caixa'/>
                    <input type='text' placeholder='CPF'className='caixa'/>
                </div>
                <div className='box2'>  
                    <input type='text' placeholder='celular' className='caixa'/>
                    <input type='text' placeholder='endereço' className='caixa'/>
                    <input type='text' placeholder='bairro' className='caixa'/>
                </div>                      
            </div>
            <button className='change'> Trocar senha </button>
            <hr className='line-button'/>
            
        </div>
    )
}


