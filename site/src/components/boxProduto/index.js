import { useState } from 'react';
import './index.scss'
import {API_URL} from '../../api/config'

export default function Consultar(props) {

    function exibir(imagem){
        if(!imagem){
            return './images/x.png'
        }
        else {
            return `${API_URL}/${imagem}`
        }
    }

    return (
        <main className='P'>
            <div className='box-produto'>
                <div className='box-desconto'>
                    <p>10%</p>
                </div>

                <div className='info-produto'>
                    <p className='nome-produto'> {props.item.nm_produto} </p>
                    <div className='preco'>
                        <p className='valor-desconto'> R$ {props.item.vl_produto}</p>
                        <p className='valor-final'> {props.item.vl_desconto} </p>
                    </div>
                </div>
            </div>
        </main>
    )
}