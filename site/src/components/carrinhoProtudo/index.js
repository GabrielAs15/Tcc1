import './index.scss';

export default function index() {
    return(
        <main>
            <div className='contPrincipal'>
                <div className='contIMG'>
                    <img src="../images/placaGTX 38.png" className=''/>
                </div>

                <div className='infoProduto'>
                    <div className='info'>
                        <p className='info-text'>Placa de video</p>
                    </div>
                    <div className='preco'>
                        <p className='info-preco'>R$1.000,00</p>
                    </div>
                </div>

                <div className='subCont'>
                    <p className='cont-text'>Quantidade</p>

                    <div className='contagem'>
                        <p>- 0 +</p>
                    </div>

                    <div>
                        <img src='../images/remover2.png' className='remove'/>
                    </div>
                </div>
            </div>
        </main>
    );
}