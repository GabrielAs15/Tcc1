import './Pedido.scss'

export default function Index(){
    return(

        <main className='main-1'>
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
                    <p className='text'>status</p>
                    <img src='../../images/revisado.png'></img>
                </div>
            </div>
            <p className='remover'>X Remover</p>
        </main>
    )
}