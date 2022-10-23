// React scss
import './index.scss';

// Hooks
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// API
import { alterarProduto, cadastroProduto } from '../../api/cadastroAPI';
import { listarMarcas } from '../../api/marcaAPI';
import { listarDepartamentos } from '../../api/departamentoAPI';
import { enviarImagemProduto } from '../../api/cadastroAPI';

//Componente
import Cabecalho from '../../components/cabecalhoADM/index.js'
import Rodapé from '../../components/rodapé/index.js';
import { BuscaporId } from '../../api/produtoAPI';
import { set } from 'local-storage';
import { API_URL } from '../../api/config';

export default function Index() {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [desconto, setDesconto] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState();
    
    const [marca, setMarca] = useState();
    const [marcas, setMarcas] = useState([]);

    const [idDepartamento, setIdDepartamento] = useState();
    const [departamentos, setDepartamentos] = useState([]);
    const [id, setId ] = useState();

    const { idParam } = useParams();    
    
    async function carregarProduto(){
        if(!idParam) return;

        const resposta = await BuscaporId(idParam);
        
        setId(resposta.info.id)
        setNome(resposta.info.nome);
        setValor(resposta.info.valor);
        setDesconto(resposta.info.desconto);
        setEstoque(resposta.info.estoque);
        setDescricao(resposta.info.descricao);
        setIdDepartamento(resposta.info.departamento);
        setMarca(resposta.info.marca);

        if(resposta.img_produto.length > 0){
            setImagem(resposta.img_produto[0]);
        }        
        
    }
    async function salvarClick() {
        try {

            if(!imagem){
                throw new Error("Insira uma imagem!");
            }
            
            if(!id){
            const  novoProduto = await cadastroProduto(idDepartamento, marca, nome, valor, desconto, estoque, descricao);
            await enviarImagemProduto(novoProduto.id, imagem);
            setId(novoProduto.id)

            alert('🚀 Produto cadastrado com sucesso! ');
            }
            else{
                await alterarProduto(id, idDepartamento, marca, nome, valor, desconto, estoque, descricao);
                await enviarImagemProduto(id, imagem);
            alert('Produto alterado com sucesso')
            }

        } catch(err) {
            alert(err.response.data.erro);
        }
    
    }       
    

    async function carregarDepartamentos() {
        const r = await listarDepartamentos();
        setDepartamentos(r);
    }


    async function carregarMarcas() {
        const r = await listarMarcas();
        setMarcas(r);
    }

    useEffect(() => {
        carregarMarcas();
        carregarDepartamentos();
        carregarProduto();
    }, []);



    function adicionarImagem(){
        document.getElementById('file').click();
    }


    function mostrarImagem(){
        if(imagem === undefined){
            return '/imagem.svg';
        }
        else if(typeof (imagem) === 'string'){
            return `${API_URL}/${imagem}`
        }
        else{
        return URL.createObjectURL(imagem)
    }
    }

    return (
        <main className="Page-Cadastro">
             <Cabecalho className="cabecalho" />

            <div className='container' >
                    <div className="content" >
                        <div className="Save" onClick={adicionarImagem}>                         
                            {!imagem && 
                            <img src="./images/image 30.png" className="f1" />
                            }
                            {imagem &&
                            <img src={mostrarImagem()} alt='' className='f2'/>
                            }

                            <input type="file" placeholder='Salvar Imagem' id='file' onChange={e=> setImagem(e.target.files[0])}/>

                            
                        </div>
                        
                        <div className='inputs'>

                            <div>
                                <label>Nome do Produto: </label> <br/> <br/>    
                                <input type="text"  className='campo'value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div>
                                <label>Preço: </label> <br/> <br/>    
                                <input type="text" className='campo'value={valor} onChange={e => setValor(e.target.value)}/>
                            </div>
                            <div>
                                <label>Desconto: </label> <br/> <br/>    
                                <input type="text" className='campo' value={desconto} onChange={e => setDesconto(e.target.value)}/>
                            </div>
                            <div>
                                <label>Estoque: </label> <br/> <br/>    
                                <input type="text"  className='campo'value={estoque} onChange={e => setEstoque(e.target.value)}/> 
                            </div>
                            <div>
                                <label>Departamento:</label> <br/><br/>
                                <select className='campo' value={idDepartamento} onChange={e => setIdDepartamento(e.target.value)}>
                                    <option selected disabled hidden>Selecione</option>
                                    
                                    {departamentos.map(item =>
                                        <option value={item.id}> {item.departamento} </option>
                                    )}

                                </select>
                            </div>
                            <div>
                                    <label>Marca:</label> <br/><br/>
                                    <select className='campo'value={marca} onChange={e => setMarca(e.target.value)}>
                                        <option selected disabled hidden>Selecione</option>
                                        {marcas.map(item =>
                                            <option value={item.id}> {item.marca} </option>
                                        )}
                                    </select>
                            </div>
                                            
                        </div>
                       
                    </div>
            </div>
                <textarea placeholder="Descrição do Produto" value={descricao} onChange={e => setDescricao(e.target.value)} />
                <div className='button'>
                <button className='button-register' onClick={salvarClick}> Cadastrar </button>
                </div>
            <Rodapé />
        </main>
    );
}