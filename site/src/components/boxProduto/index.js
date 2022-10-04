import './index.scss'

export default function consultar(){
    return(
         <main className='P'>
            <div className='box-produto'>
            <div className='box-desconto'>
                <p>10%</p>
            </div>

            <div className='img-produto'>
                <img src="../images/placaGTX 33.png"/>
            </div>

            <div className='info-produto'>
                <p className='nome-produto'>Placa de Video</p>
                <div className='preco'>
                    <p className='valor-desconto'>DE: R$2.0000,00</p>
                    <p className='valor-final'>POR: R$1.800,00</p>
                </div>
            </div>
        </div>
         </main>


    )
}