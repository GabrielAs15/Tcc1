import { useState } from 'react';
import './index.scss'
import {API_URL} from '../../api/config'
import { useNavigate } from 'react-router-dom';

export default function Consultar(props) {

    const navigate = useNavigate();
    
    
    function exibir(imagem){
        if(!imagem){
            return './images/x.png'
        }
        else {
            return (`${API_URL}/${imagem}`)
        }
    }

    function abrirDetalhes(id) {
        navigate('/PaginaProduto/' + id + '/detalhe')
    }


    return (
        <main className='p' onClick={() => abrirDetalhes(props.item.id_produto)}>
            
            <div className='box-produto'>
            <p className='box-desconto'> {props.item.desconto}%</p>

                <img src={exibir(props.item.imagem)} alt="" className='imagens-landing'/> 
                <div className='info-produto'>
                    <p className='nome-produto'> {props.item.nome} </p>
                    <div className='preco'>
                        <p className='valor-final'> {props.item.valor} </p>
                    </div>
                </div>
            </div>
        </main>
    )
}