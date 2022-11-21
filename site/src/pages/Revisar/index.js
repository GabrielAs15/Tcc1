import './index.scss'

import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { BuscaporId } from '../../api/usuario/produtoAPI.js';
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Storage from 'local-storage'
import { salvarNovoPedido } from '../../api/usuario/pedidoAPI.js'
import { useNavigate } from 'react-router-dom';
import Endereco from '../../components/cardEndereco/index.js'
import { listarEndereco } from '../../api/usuario/enderecoAPI.js';
import Rodape from '../../components/rodapé/index.js';

export default function Revisar() {
    const [itens, setItens] = useState([]);
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');
    const [idEndereco, setIdEndereco] = useState();
    const [enderecos, setEnderecos] = useState([]);
    const navigate = useNavigate();


    async function carregarEnderecos() {
        const id = Storage('usuario-logado').id;
        const r = await listarEndereco(id);
        setEnderecos(r);
    }

    async function salvarPedido() {

        try {
            let produtos = Storage('carrinho');
            let id = Storage('usuario-logado').id;

            let pedido =
            {
                idEndereco: idEndereco,
                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: vencimento,
                    codSeguranca: cvv,
                    formaPagamento: tipo,
                    parcelas: parcela
                },
                produtos: produtos
            }

            const r = await salvarNovoPedido(id, pedido);
            toast.dark('Pedido foi inserido com sucesso');
            Storage('carrinho', []);
            navigate('/');

        }
        catch (err) {
            toast.error(err.response.data.erro);
        }

    }


    function calcularTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.qtd * item.produto.info.valor;
        }
        return total;
    }

    async function mostrarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await BuscaporId(produto.id);
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            setItens(temp)
        }

    }

    function novoEnd() {
        navigate('/CadastrarEndereco');
    }



    useEffect(() => {
        mostrarCarrinho();
        carregarEnderecos();
    }, [])
    return (

        <div className='revisar-page'>
            <Cabecalho />
            <ToastContainer />


            <div className='dados-pedido'>
                <div className='enderecos'>
                    <div className='título-enderecos'> Selecione o Endereço </div>
                    <div className='subtítulo-enderecos'> *Esse é o endereço em que seu produto será entregue</div>
                    <div className='comp-endereco-revisar'>
                        {enderecos.map(item =>
                            <Endereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco} />
                        )}
                    </div>
                    <button className='add-adress' onClick={novoEnd}> Novo Endereço </button>
                </div>


                <div className='box-pagamento-produto'>
                    <div> Pagamento </div>
                    <div className='box-pagamento-cartão'>
                        <div className='box-NMC'>
                            <input type='text' placeholder='Número do Cartão' className='NMC' value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <div className='info-card'>
                            <div>
                                <input type='text' placeholder='data de validade' className='info-content' value={vencimento} onChange={e => setVencimento(e.target.value)} />
                            </div>
                            <div>
                                <input type='text' placeholder='CVV' className='info-content2' value={cvv} onChange={e => setCvv(e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <input type='text' placeholder='Nome do cartão' className='info-content3' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div>
                            <label>Tipo de Pagamento:</label>
                            <select value={tipo} onChange={e => setTipo(e.target.value)}   >
                                <option disabled hidden selected>Selecione</option>
                                <option>Crédito</option>
                                <option>Débito</option>
                            </select>
                        </div>
                        <div>
                            <label>Parcelas:</label>
                            <select value={parcela} onChange={e => setParcela(e.target.value)}  >
                                <option disabled hidden selected>Selecione</option>
                                <option value={1}>01x à Vista</option>
                                <option value={2}>01x sem Juros</option>
                                <option value={3}>02x sem Juros</option>
                                <option value={4}>03x sem Juros</option>
                            </select>
                        </div>


                    </div>
                    

                <div className='pedido-valor'>
                    <div className='título-pedido-valor'> Pedido </div>
                    <div>
                        {itens.map(item =>

                            <div>

                                <div> Produto: {item.produto.info.nome} </div>

                                <div> Quantidade: {item.qtd}</div>


                                <div> Departamento: {item.produto.info.departamento} </div>
                                <div> Preço: {item.produto.info.valor} </div>

                            </div>

                        )}
                    </div>

                    <div> Total: {calcularTotal()} </div>
                </div>
            </div>

                <div className='botao'>
                        <button className='botão' onClick={salvarPedido}> Continuar </button>
                </div>
            </div>
            <Rodape />
        </div>
    )
}