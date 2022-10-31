import './index.scss';

import Cabecalho from '../../components/cabecalhoUSUARIO'; 
import Rodapé from '../../components/rodapé';

export default function index(){
    return(
    <main className='page-total'>
            <Cabecalho />   
        <div>
            <h1> Sobre Nós </h1>
        </div>
        <div>
            <p>
                Desde a inauguração trabalhamos incessantemente para expandir a oferta de produtos e tornar a experiência de nossos clientes a melhor possível. Temos orgulho de chegar até aqui e queremos melhorar cada dia mais.
                <br/><br/>
                Nosso acervo é cuidadosamente selecionado e nossas opções de envio e pagamento são práticas e flexíveis. Navegue por nossa galeria de produtos e experimente comprar no(a) TechExpress.
            </p>
        </div>
        
        <div className='descriçoes'>
            <h2> Fale consoco </h2>

            <div className='divizinha'>
                <div className='numero'>
                    <img src="../images/icone de telefone.png" className='imgs'/>
                    <p className='n1'>11-940586464</p>
                </div>
                
                <div className='endereço'>
                    <p>Rua das Laranjas, Vila Natal
                        <br/>
                    N°145
                    </p>
                </div>
            </div>
        </div>
        <Rodapé />
    </main>    
    )
}