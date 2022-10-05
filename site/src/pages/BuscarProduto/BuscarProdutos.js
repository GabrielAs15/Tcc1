//componentes
import Produto from '../../components/boxProduto/index.js'

// Hooks
import { Link } from 'react-router-dom';

export default function BuscarProduto(){

    return(
        <main className="page-total">
            <div>
                <h1>Consultar Produtos</h1>
                <input type="text" placeholder='Busque aqui' className='Busque' />
                <Produto />
                <Link to="/Cadastro"> Editar informações </Link>
            </div>
        </main>
    )
}