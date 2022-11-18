import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BuscaporId } from '../../api/usuario/produtoAPI';
import { API_URL } from '../../api/config.js'
import Storage from 'local-storage';

export default function Index(props) {
    const [produto, setProduto] = useState({ info: {}, imagens: [] })
    

    const { id } = useParams();


    async function carregarPagina() {
        const r = await BuscaporId(id);
        setProduto(r);
    }

    

    function exibirImagemProduto(imagem) {

        if (!imagem) {
            return './images/x.png'
        }
        else {
            return (`${API_URL}/${imagem}`)

        }
        
    }


    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
        }

        
        
        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho);
        }

        alert('Produto adicionado ao carrinho!');
    }
    
    /* IMPORTAÇÃO DA IMAGEM 
         */

    useEffect(() => {
        carregarPagina();        
    }, [])

    return (
        <div className="page-produto">
            <Cabecalho />
            <div className='box-produto-page'>
            <div className="imagem-produto">
                    {produto.imagem && produto.imagem.map((item) =>
                        <img src={exibirImagemProduto(item.imagem)} className='imagem-produto-imagem'/>
                    )}
            </div>
                <div className="nome-produto-título">
                    <div className='nome-produto'> {produto.info.nome} </div>
                    <div className='desconto-preco-produto'> <p className='preco-produto'> {produto.info.desconto} </p> %</div>
                    <div className='desconto-produto'> R$ {produto.info.valor} </div>
                    <button className='botao-produto' onClick={adicionarAoCarrinho}> Adicionar ao Carrinho </button>
                </div>
            </div>
            <div className="descricao-produto">
                <div> Descricao do Produto: {produto.info.descricao} </div>
            </div>
            <Rodape />
        </div>
    )
}