// React scss
import './BuscarProduto.scss';

//componentes
import Produto from '../../components/boxProduto/index.js'
import Cabecalho from '../../components/cabecalhoADM/index.js'

// Hooks
import { Link } from 'react-router-dom';

export default function BuscarProduto(){

    return(
        <main className="page-total">
            <div>
                <div className='titulo'>
                    <h1>Consultar Produtos</h1>
                </div>
                

                    <input type="text" className='busque' placeholder='Busque aqui' />

                <Produto />

                <div className='botao-alterar'>
                    <Link className='txt' to="/Cadastro" > Alterar informações </Link>
                </div>
            </div>
        </main>
    )
}