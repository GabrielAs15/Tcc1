import './index.scss';

export default function index() {
    return(
        <main>
            <div className='contPrincipal'>
                <div className='contIMG'>
                    <img src="../images/placaGTX 38.png" className='imgProduto'/>
                </div>

                <div className='infoProduto'>
                    <div className='info'>
                        <p className='info-text'>Placa de video</p>
                    </div>
                    <div className='preco'>
                        <p className='info-text'>R$1.000,00</p>
                    </div>
                </div>

                <div className='subCont'>
                    <p className='info-text'>Quantidade</p>

                    <div className='contagem'>
                        <button className='info-text'>-</button>
                        <p className='zero'> 0 </p>
                        <button className='info-text'> + </button>
                    </div>

                    <div>
                        <img src='../images/remover2.png' className='remove'/>
                    </div>
                </div>
            </div>
        </main>
    );
}