import './index.scss'

import Cabecalho from '../../components/cabecalhoADM'

export default function Index() {
    return (
        <div className="pedidos-page">
            <Cabecalho />

            <div className='fc'>

                <div className='titulo-pagina-pedidos'> Pedidos Abertos </div>

                <div className="box-pedido-cliente">
                    <div className='box-dentro-pedido-cliente'> 
                        <div> Nome do Cliente </div>
                        <div> Nome produto </div>
                        <div> Método de pagamento </div>
                        <div> Endereço: Rua de tal n°0 </div>
                    </div>
                    <div className='box2-dentro-pedido-cliente'> 
                        <div> Status </div>
                        <img src="./images/revisado.png" className='status-pedido'/>
                    </div>
                </div>
            </div>

        </div>
    )
}