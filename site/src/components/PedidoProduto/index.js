import './index.scss'

export default function Index(){
    return(

        <main className='fundo'>
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
                    <p>status</p>
                    <img src='../../images/image 44.png'></img>
                </div>
            </div>
        </main>
    )
}