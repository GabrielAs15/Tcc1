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
                <div className="sub-1">
                    <h2> Forma de pagamento: {} </h2>
                    <h2> Endereço: {} </h2>
                </div>

            </div>
            <div>
                <h1> Status Pedido </h1>
                <div className="section-2">
                    <div className="divis-1">
                        <img src="../images/iconeplaqueta.png" />
                        <div className="div-1">
                            <input type="checkbox"/>
                            <p>Revisado</p>
                        </div>
                    </div>
                    <div className="divis-2">
                        <img src="../images/image 45.png" />
                        <div className="div-2">
                            <input type="checkbox"/>
                            <p>Separado</p>
                        </div>
                    </div>
                    <div className="divis-3">
                        <img src="../images/image 46.png" />
                        <div className="div-3">
                            <input type="checkbox"/>
                            <p>À caminho</p>
                        </div>
                    </div>
                    <div className="divis-4">
                        <img src="../images/image 47.png" />
                        <div className="div-4">
                            <input type="checkbox"/>
                            <p>Entregue</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}