import './index.scss';

//importações
import {useRef } from 'react';

import Cabecalho from '../../components/cabecalhoUSUARIO'
import Produto from '../../components/boxProduto'
import Rodape from '../../components/rodapé'
import Marca from '../../components/img-M'
import Carrossel from '../../components/carrossel'


export default function Index(){

    return(
        <section className='Page-home'>
            <Cabecalho />
                <div className='section-home'>
                    <p> BEM-VINDO <br/> A <br/> TECH EXPRESS</p>
                </div>
                <div>
                    <p className='promocoes'> PROMOÇÕES </p>
                </div>
                <div className=''>
                    <Carrossel/>
                </div>

                <div>
                    <p className='promocoes'> MAIS VENDIDOS </p>
                </div>
                <div className=''>
                    <Carrossel/>
                </div>

                <div>
                    <p className='promocoes'> LANÇAMENTOS </p>
                </div>
                <div className=''>
                    <Carrossel/>
                </div>

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