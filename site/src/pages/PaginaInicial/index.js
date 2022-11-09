import './index.scss';

//importações
import {useRef } from 'react';

import Cabecalho from '../../components/cabecalhoUSUARIO'
import Produto from '../../components/boxProduto'
import Rodape from '../../components/rodapé'
import Marca from '../../components/img-M'


export default function Index(){

    const carrossel = useRef(null);

    const leftClick=(e)=>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const rightClick=(e)=>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth

    }

    return(
        <section className='Page-home'>
            <Cabecalho />
                <div className='section-home'>
                    <p> BEM-VINDO <br/> A <br/> TECH EXPRESS</p>
                </div>
                <div>
                    <p className='promocoes'> PROMOÇÕES </p>
                </div>
            <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>

            <div>
                    <p className='promocoes'> MAIS VENDIDOS </p>
                </div>
            <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>

            <div>
                    <p className='promocoes'>MARCAS </p>
                </div>
            <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                    <Marca/>
                    <Marca/>
                    <Marca/>
                    <Marca/>
                    <Marca/>
                    <Marca/>
                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>

            <div>
                    <p className='promocoes'> LANÇAMENTOS </p>
                </div>
            <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>

            <Rodape/>

        </section>
        
    )
}