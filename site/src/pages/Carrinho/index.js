import './carrinho.scss';

import CarrinhoP from '../../components/carrinhoProtudo';
import Cabecalho from '../../components/cabecalhoUSUARIO'
import Rodape from '../../components/rodapé/index.js'

export default function index() {
    return (
        <main className='page'>
            <Cabecalho />
            <div className="progressBar">
                
            </div>
            <div className='container-1'>       
                <div className='container-2'>
                    <div className='componente'>
                        <div className="cont2">
                            <CarrinhoP className='componente-carrinho' />
                        </div>
                        <div className="cont3">
                            <CarrinhoP className='componente-carrinho' />
                        </div>
                    </div>

                    <div className='total'>
                         
                        <h2 className='sub-titulo'> Resumo da compra </h2>
                        <p className='corverde'> Valor total </p>
                        <p> R$2.000,00 </p>
                        <hr/>
                        <p className='corverde'> Frete </p>
                        <p> Grátis </p>

                        <button className='botao'> Finalizar pedido </button>
                    </div>
                </div>
            </div>
            <Rodape />
        </main>
    )
}