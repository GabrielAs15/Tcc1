import './index.scss';

import Cabecalho from '../../components/cabecalhoUSUARIO'; 

export default function index(){
    return(
    <main>
        <Cabecalho />
        <div>
            <h1> Sobre Nós </h1>
        </div>
        <div>
        <p>Desde a inauguração trabalhamos incessantemente para expandir a oferta de produtos e tornar a experiência de nossos clientes a melhor possível. Temos orgulho de chegar até aqui e queremos melhorar cada dia mais.
        <br/>
        Nosso acervo é cuidadosamente selecionado e nossas opções de envio e pagamento são práticas e flexíveis. Navegue por nossa galeria de produtos e experimente comprar no(a) TechExpress.</p>
        </div>
        <div>
            <h2> Fale consoco </h2>

            <div>
                <div>
                <img src="../images/icone de telefone.png"/><p>11-940586464</p>
                </div>
                <div>
                    <p>Rua  das laranjas, vila natal N°145</p>
                </div>
            </div>
        </div>
    </main>    
    )
}