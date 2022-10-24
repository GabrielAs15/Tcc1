import './carrinho.scss';

import CarrinhoP from '../../components/carrinhoProtudo';
import Cabecalho from '../../components/cabecalhoUSUARIO'
export default function index() {
    return (
        <main className='page'>
            <Cabecalho />
            <div className='cont1'>

                <div className="progressBar">
                    k
                </div>
              
                   
                <div className="cont2">
                    <CarrinhoP className='carrinho' />
                </div>

                <div className="cont3">
                    <CarrinhoP className='carrinho' />
                </div>

                <div>
                    <h2>Resumo da compra</h2>

                    <p>Valor total <br/> R$2.000,00</p>
                    
                    <hr/>
                    <p>Frete <br/> Grátis</p>

                    <button>Finalizar pedido</button>
                </div>
            
            </div>

        </main>
    )
}