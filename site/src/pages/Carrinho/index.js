import './carrinho.scss';

import CarrinhoP from '../../components/carrinhoProtudo'
export default function index (){
    return(
        <main className='page'>
            
            <div >
                <div className="progressBar"></div>
                <div className="cont1">
                    <CarrinhoP className='carrinho'/>
                </div>
                
            </div>
            
        </main>
    )
}