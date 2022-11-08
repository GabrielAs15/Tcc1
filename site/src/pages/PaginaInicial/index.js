import './index.scss';

//importações
import Cabecalho from '../../components/cabecalhoUSUARIO'
import Produto from '../../components/boxProduto'

export default function Index(){

    return(
        <section className='Page-home'>
            <Cabecalho />
            <div className='section-home'>
                <p> BEM-VINDO <br/> A <br/> TECH EXPRESS</p>
            </div>
            <div>
                <p className='promocoes'> PROMOÇÕES </p>
            </div>
        </section>
    )
}