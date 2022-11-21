import './index.scss';
import { API_URL } from '../../api/config.js'
import { useState } from 'react';
import Storage from 'local-storage'

export default function CarrinhoProduto({ item: { produto: { info, imagem}, qtd}, removerItem, mostrarCarrinho } ) {
//const [subtotal, setSubtotal] = useState('-');
const [qtdProduto, setQtdProduto] = useState(qtd)

    function exibirImagem() {
        if (imagem.length >= 0) {
            return API_URL + '/' + imagem[0].imagem;
        }
        else {
            return '/x.png'
        }
    }


    function calcularSubtotal(){
      const subtotal = qtdProduto * ( info.valor);
      return subtotal;

    }

    function remover(){
        removerItem(info.id)
    }

    function alterarQuantidade(novaQtd){
        setQtdProduto(novaQtd);
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;
        
        Storage('carrinho', carrinho);
        mostrarCarrinho();
    }


    return(
        <main className='fundo'>
            <div className='contPrincipal'>
                <div className='contIMG'>
                    <img src={exibirImagem(info.imagem)} className='imgProduto'/>
                </div>

                <div className='infoProduto'>
                    <div className='info'>
                        <p className='info-text'> {info.nome} </p>
                    </div>
                    <div>
                        <p className='departamento-carrinho'> {info.departamento} </p> 
                    </div>
                    <div className='preco'>
                        <p className='info-text'> R$ {info.valor} </p>
                    </div>
                </div>

                <div className='subCont'>
                    <p className='info-text'> Quantidade</p>

                    <div className='contagem'>
                        <select value={qtdProduto} onChange={e => alterarQuantidade(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div>
                        <img src='../images/remover2.png' className='remove' onClick={remover}/>
                    </div>
                </div>
                <div className='subtotal-produto'>
                    <div className='título-subtotal-produto'> Subtotal </div>
                    <div className='valor-subtotal-produto'> R$ {calcularSubtotal()} </div> 
                </div>
            </div>
        </main>
    );
}