import './index.scss';
import { API_URL } from '../../api/config.js'
import { useEffect } from 'react';


export default function CarrinhoProduto({ item: { produto: { info, imagem}, qtd} } ) {
    

    function exibirImagem() {
        if (imagem.length >= 0) {
            return API_URL + '/' + imagem[0].imagem;
        }
        else {
            return '/x.png'
        }
    }

    useEffect(() =>{
        console.log(imagem) 
    }, []);
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
                        <select >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div>
                        <img src='../images/remover2.png' className='remove'/>
                    </div>
                </div>
            </div>
        </main>
    );
}