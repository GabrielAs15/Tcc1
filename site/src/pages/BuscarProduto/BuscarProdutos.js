// React scss
import './BuscarProduto.scss';

//componentes
import Produto from '../../components/boxProduto/index.js'
import Cabecalho from '../../components/cabecalhoADM/index.js'

// Hooks
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BuscarProduto(){
const [produto, setProduto] = useState([]);

return(
        <main className="page-total">
            <div>
                <div className='titulo'>
                    <h1>Consultar Produtos</h1>
                </div>
                

                    <input type="text" className='busque' placeholder='Busque aqui' />
                
                {produto.map( item =>
                <div className='produto'>
                    <div> {item.idDepartamento} </div> 
                    <div>{item.marca}</div>
                    <div>{item.nome}</div>
                    <div>{item.valor}</div>
                    <div>{item.desconto}</div>
                    <div>{item.estoque}</div>
                    <div>{item.descricao}</div>
                </div>
                )}

                <div className='botao-alterar'>
                    <Link className='txt' to="/Cadastro" > Alterar informações </Link>
                </div>
            </div>
        </main>
    )
}