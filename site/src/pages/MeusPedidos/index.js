import './index.scss'

import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'  
import Box from '../../components/PedidoProduto/index.js'

export default function Index(){
    return(
        <main className='Page'>
            <Cabecalho className='comp' />
            <div className='Cont01'>
                <p className='textc'>Minha Conta</p>
                <p className='textc'>Meus dados</p>
                <p className='black'>Meus pedidos</p>
                <p className='textc'>Endereços</p>
            </div>
            <div>
                <Box/>
            </div>
            <div>
                <Box/>
            </div>
            <div>
                <Box/>
            </div>
        </main>
    )
}