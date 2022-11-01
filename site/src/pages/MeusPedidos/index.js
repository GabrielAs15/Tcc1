import './index.scss'

import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'  
import Box from '../../components/PedidoProduto/index.js'

export default function Index(){
    return(
        <main className='Page'>
            <Cabecalho />
            <div className='Cont01'>
                <p>MinhaConta</p>
                <p>Meus dados</p>
                <p>Meus pedidos</p>
                <p>Endereços</p>
            </div>
            <div>
                <Box/>
            </div>
        </main>
    )
}