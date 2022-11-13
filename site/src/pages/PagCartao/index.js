import './index.scss';
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'


export default function Index() {


    return (
        <main className='payment-page'>
            <Cabecalho />

            <div className='box-grandao'>
                <h1> Opções de pagamento </h1>

                <div className='box-pagamento-cartão'>
                    <div className='box-NMC'>
                        <input type='text' placeholder='Número do Cartão' className='NMC' />
                    </div>
                    <div className='info-card'>
                        <div>
                            <input type='text' placeholder='data de validade' className='info-content' />
                        </div>
                        <div>
                            <input type='text' placeholder='CVV' className='info-content2' />
                        </div>
                    </div>
                    <div>
                        <input type='text' placeholder='Nome do cartão' className='info-content3' />
                    </div>
                    <div className='opção-pagamento'>
                        <div className='opção-cartão'>
                            <input type='radio' />
                            <img src='./images/cartão.png'  className='cartao'/>
                        </div>
                        <div className='opção-pix'>
                            <input type='radio'/>
                            <img src='./images/pix.png' className='pix'/>
                        </div>
                    </div>

                    <div className='botao'>
                        <button className='botão'> Continuar </button>
                    </div>
                </div>
            </div>


        </main>
    )
}