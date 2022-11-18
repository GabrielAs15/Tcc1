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
    const [produto, setProduto] = useState([]);

    

    console.log(produto);

    return(
        <section className='Page-home'>
            <div className='cabecalho-home'>
                <Cabecalho />
            </div>
                <div className='section-home'>
                    <p> BEM-VINDO <br/> A <br/> TECH EXPRESS</p>
                </div>
                <div>
                    <p className='promocoes'> PROMOÇÕES </p>
                </div>
                
                <Carrossel />           

                <div>
                    <p className='promocoes'> MAIS VENDIDOS </p>
                </div>
                
                <Carrossel />               

                <div>
                    <p className='promocoes'> LANÇAMENTOS </p>
                </div>
                
                <Carrossel />

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