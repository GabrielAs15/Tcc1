import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BuscaporId } from '../../api/usuario/produtoAPI';
import {API_URL} from '../../api/config.js'

export default function Index(props){
    const [produto, setProduto] = useState({ info: {}, imagens: [] })
    const [imagemPrincipal, setImagemPrincipal] = useState(0);

    const { id } = useParams();


    async function carregarPagina() {
        const r = await BuscaporId(id);
        setProduto(r);
    }

    function exibirImagemPrincipal() {
        if (produto.imagens.length > 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal];
        }
        else {
            return '/produto-padrao.png';
        }
    }

    function exibirImagemProduto(imagem) {
        return API_URL + '/' + imagem;
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


    useEffect(() => {
        carregarPagina(); 
    }, [])

    return(
        <div className="page-produto">
            <Cabecalho />
            <div className='box-produto-page'>
                <div className="imagem-produto">
                {produto.imagens.map((item, pos) => 
                    <img src={exibirImagemProduto(item)} />
                )}                </div>
                <div className="nome-produto-título">
                    <div className='nome-produto'> {produto.info.nome} </div>
                    <div className='preco-produto'> {produto.info.desconto}</div>
                    <div className='desconto-produto'> {produto.info.valor} </div>
                    <button className='botao-produto'onClick={adicionarAoCarrinho}> Adicionar ao Carrinho </button>
                </div>
            </div>
            <div className="descricao-produto">
                <div> {produto.info.descricao} </div>
            </div>
            <Rodape />
        </div>
    )
}