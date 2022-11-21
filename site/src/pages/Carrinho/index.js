import './carinho.scss'


import Cabecalho from '../../components/cabecalhoUSUARIO';
import Produto from '../../components/carrinhoProduto';
import Rodape from '../../components/rodapé';
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { BuscaporId } from '../../api/usuario/produtoAPI';
import { useNavigate } from 'react-router-dom';

export default function Index(){
const [itens, setItens] = useState([]);

    const navigate = useNavigate();

    function calcularTotal(){
        let total = 0;
        for(let item of itens){
            total = total + (item.produto.info.valor * item.qtd);
        }
        return total;
    }

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

    function irPedido() {
        navigate('/Revisar')
    }

    function removerItem(id){
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho)
        mostrarCarrinho();
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
                             <Produto 
                                item={item} 
                                removerItem={removerItem} 
                                mostrarCarrinho={mostrarCarrinho}/>
                            )}
                        </div>
                </div>
                    <div className='div-carrinho'>
                        <div className='subdiv-carrinho'>
                            <p className='text-carrinho'>Resumo da <br/> compra</p>
                            <div className='fonte-carrinho'>    
                                <p className='cor-carrinho'>Valor total</p>
                                <p>R$ {calcularTotal()}</p>
                                <hr/>
                                <p className='cor-carrinho'> Frete</p>
                                <p>Grátis</p>

                                <div>
                                    <button className='botao-carrinho' onClick={irPedido}> <p className='text-botao-carrinho'>Finalizar Pedido</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rodape />
            </main>
    )
}