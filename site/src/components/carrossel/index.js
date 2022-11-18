import './index.scss'
import {useRef, useState, useEffect } from 'react';
import Produto from '../../components/boxProduto'
import { listarProdutosHome } from '../../api/usuario/produtoAPI';


export default function Index(){
const [produto, setProduto] = useState([])
    const carrossel = useRef(null);

    const leftClick=(e)=>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const rightClick=(e)=>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth

    }

    async function listar(){
        const r = await listarProdutosHome();
        setProduto(r);
    }

    useEffect(() => {
        listar();
    }, []);

    return(
        <div className='cont-P'>
                    <button className='botao' onClick={leftClick}>
                        <img className='img-B' src='images/left.png' alt='Scroll Left'/>
                    </button>
                <div className='carrossel' ref={carrossel}>   
                <div className='marca'>
                    {produto.map(item => 
                        <div className=''>
                            <Produto item={item} />
                        </div>
                    )}
                    </div>

                </div>
                    <button className='botao' onClick={rightClick}>
                        <img  className='img-B' src='images/right.png' alt='Scroll Right'/>
                    </button>
            </div>
    )
}