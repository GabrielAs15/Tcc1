import { useState } from 'react';
import './index.scss'

export default function Consultar(){
const [pedidoCliente, setPedidoCliente] = useState('');

    return(
         <main className='P'>
            <div className='box-produto'>
            <div className='box-desconto'>
                <p>10%</p>
            </div>

            <div className='img-produto'>
                <img src="../images/placaGTX 38.png"/>
            </div>

            <div className='info-produto'>
                {pedidoCliente.map (item => 
                    <div>
                        <p className='nome-produto'> {item.nome} </p>
                        <div className='preco'>
                        <p className='valor-desconto'> {item.valor}</p>
                        <p className='valor-final'> {item.desconto} </p>
                        </div>
                    </div>
                )}
                
                
            </div>
        </div>
         </main>


    )
}