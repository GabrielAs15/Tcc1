import "./index.scss";


import Cabecalho from '../../components/cabecalhoADM';

export default function index(){
    return(
        <main className="pagina-tda">
            <Cabecalho />
            <div className="section-1">
                <div>
                    <h2> Nome do cliente: {} </h2>
                    <h2> Produto: {}</h2>
                </div>
                <div>
                    <h2> Forma de pagamento: {} </h2>
                    <h2> Endereço: {} </h2>
                </div>
            </div>
            <div>
                <h1> Status Pedido </h1>
            </div>
        </main>
    )
}