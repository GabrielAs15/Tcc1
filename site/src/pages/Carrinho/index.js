import './carinho.scss'


import Cabecalho from '../../components/cabecalhoUSUARIO';
import Produto from '../../components/carrinhoProduto';
import Rodape from '../../components/rodapé';
export default function Index(){

    return(
            <main className='pag-carrinhototal'>
                <Cabecalho />
                <div className='div-total-carrinho'>
                    <div className='subdiv-total-carrinho'>
                        <div className='pdt-carrinho'>
                            <Produto />
                        </div>
                        <div className='pdt-carrinho'>
                            <Produto />
                        </div>
                    </div>
                    <div className='div-carrinho'>
                        <div className='subdiv-carrinho'>
                            <p className='text-carrinho'>Resumo da <br/> compra</p>
                            <div className='fonte-carrinho'>    
                                <p className='cor-carrinho'>Valor total</p>
                                <p>R$2.000,00</p>
                                <hr/>
                                <p className='cor-carrinho'> Frete</p>
                                <p>Grátis</p>

                                <div>
                                    <button className='botao-carrinho'> <p className='text-botao-carrinho'>Finalizar Pedido</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodape />
            </main>
    )
}