import './carinho.scss'


import Cabecalho from '../../components/cabecalhoUSUARIO';
import Produto from '../../components/carrinhoProduto';
import Rodape from '../../components/rodapé';
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { BuscaporId } from '../../api/usuario/produtoAPI';
export default function Index(){
const [itens, setItens] = useState([]);

    async function mostrarCarrinho(){
        let carrinho = Storage('carrinho');
        if(carrinho){
            
            let temp = [];

            for(let produto of carrinho){
                let p = await BuscaporId(produto.id);
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }   
            setItens(temp)
        }
        
    }

    useEffect(() => {
        mostrarCarrinho();
    }, [])



    return(
            <main className='pag-carrinhototal'>
                <Cabecalho />
                <div className='div-total-carrinho'>
                    <div className='subdiv-total-carrinho'>
                        <div className='pdt-carrinho'>
                           {itens.map(item =>
                             <Produto item={item}/>
                            )}
                        </div>
                        <div className='pdt-carrinho'>
                        {itens.map(item =>
                             <Produto item={item}/>
                            )}                       
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