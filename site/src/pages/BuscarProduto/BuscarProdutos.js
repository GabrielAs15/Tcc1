// React scss
import './BuscarProduto.scss';

//componentes
import Produto from '../../components/boxProduto/index.js'
import Cabecalho from '../../components/cabecalhoADM/index.js'

// Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//API
import { mostrarTodosProdutos, showImage, buscaPorNome, removerProduto } from '../../api/produtoAPI';

//React
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index(){
const [produto, setProduto] = useState([]);
const [filtro, setFiltro] = useState('');

const navigate = useNavigate();


async function buscarClick(){
    const resp = await buscaPorNome(filtro);
    console.log(resp)
    setProduto(resp);
}

async function removerClick(id, nome){

    confirmAlert({
        title: 'Remover Produto',
        message: ` Você realmente deseja remover o produto ${nome}?`,
        buttons: [
            {
                label: 'Sim',
                onClick: async () => {
                const resp = await removerProduto(id, nome);
                if(filtro === ''){
                    carregarTodosProdutos();
                }
                toast.dark("Produto removido com sucesso");
                }
            },
            {
                label: 'Não'
            }
        ]
    })

   
}

async function carregarTodosProdutos(){
    const resp = await mostrarTodosProdutos();
    setProduto(resp);
}

function editar(id){
    navigate(`/alterar/${id}`);
}

useEffect(() => {
    carregarTodosProdutos();
}, []);
    


return(
        <main className="page-total">
            <div>
                <div className='titulo'>
                    <h1>Consultar Produtos</h1>
                </div>
                
                    <div className="search">
                    <input type="search" className='busque' placeholder='Busque aqui' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img src='./images/lupa.png'className='lupa' onClick={buscarClick}/>
                    </div>
                



                    <table>
                <thead>
                    <tr>
                        <th> Identificação </th>
                        <th> Departamento </th>
                        <th> Marca </th>
                        <th> Nome </th> 
                        <th> Valor </th>
                        <th> Desconto </th>
                        <th> Estoque </th>
                        <th> Descrição </th>
                        <th> Editar/Remover </th>
                    </tr>
                </thead>
                <tbody>
                    {produto.map (item => 
                            <tr>
                                <td> {item.id_produto}</td>
                                <td> {item.nm_departamento} </td>
                                <td> {item.nm_marca} </td>
                                <td> {item.nm_produto} </td>
                                <td> {item.vl_produto} </td>
                                <td> {item.vl_desconto}</td>
                                <td> {item.qtd_estoque}</td>
                                <td> {item.ds_produto}</td>
                                <td>
                                    <img src='./images/editar.png' className='editar' onClick={() => editar(item.id)}/>
                                    <img src='./images/remover.png ' className='editar' onClick={() => removerClick(item.id_produto, item.nm_produto)}/>
                                </td>
                            </tr>
                    )}
                </tbody>
            </table>
                
                
                
                <div className='botao-alterar'>
                    <Link className='txt' to="/Cadastro" > Alterar informações </Link>
                </div>
            </div>
            <ToastContainer />
        </main>
    )
}
