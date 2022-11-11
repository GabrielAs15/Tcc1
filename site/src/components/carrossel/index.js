import './index.scss'
import {useRef } from 'react';
import Produto from '../../components/boxProduto'
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
        <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>

                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>
                    <div className='marca'>
                        <Marca/>
                    </div>

                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>
    )
}