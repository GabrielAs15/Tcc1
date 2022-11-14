import './index.scss';

//importações
import {useRef } from 'react';

import Cabecalho from '../../components/cabecalhoUSUARIO'
import Produto from '../../components/boxProduto'
import Rodape from '../../components/rodapé'
import Marca from '../../components/img-M'
import Carrossel from '../../components/carrossel'
import { listarProdutosHome } from '../../api/usuario/produtoAPI';
import { useState, useEffect } from 'react';

export default function Index(){
    const [produto, setProduto] = useState();


    async function listar(){
        const r = await listarProdutosHome();
        setProduto(r);
    }

    useEffect(() => {
        listar();
    }, []);



    return(
        <section className='Page-home'>
            <Cabecalho />
                <div className='section-home'>
                    <p> BEM-VINDO <br/> A <br/> TECH EXPRESS</p>
                </div>
                <div>
                    <p className='promocoes'> PROMOÇÕES </p>
                </div>
                
                {produto.map(item => 
                        <div className=''>
                            <Produto item={item} />
                        </div>
                    )}
            

                <div>
                    <p className='promocoes'> MAIS VENDIDOS </p>
                </div>
                
                {produto.map(item => 
                        <div className=''>
                        <Produto item={item} />
                        </div>
                    )}
                

                <div>
                    <p className='promocoes'> LANÇAMENTOS </p>
                </div>
                
                {produto.map(item => 
                        <div className=''>
                        <Produto item={item} />
                        </div>
                    )}
                

                <div>
                    <p className='promocoes'> MARCAS </p>
                </div>
                <div className='cont-M'>
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

            <Rodape/>

        </section>
        
    )
}