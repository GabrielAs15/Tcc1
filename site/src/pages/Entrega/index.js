import './index.scss';
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'
import CardEndereco from '../../components/cardEndereco/index.js'
import Storage from 'local-storage'
import {listarEndereco } from '../../api/usuario/enderecoAPI.js'
import { useState, useEffect } from 'react';

export default function Entrega() {
    const [enderecos, setEnderecos] = useState([]);

    async function carregarEnderecos() {
        const id = Storage('usuario-logado').id;
        const r = await listarEndereco(id);
        setEnderecos(r);
    }

    useEffect(() => {
        carregarEnderecos();
    }, [])

    
    

    return (
        <main className='entrega-page'>
            <Cabecalho />
                
            <div className='Título-entrega'> Selecione um Endereço </div>
            <div className='subtítulo-entrega'> *Esse é o endereço em que seu produto será entregue</div>

            {enderecos.map(item => 
                <CardEndereco item={item}/>
            )}
            
            <div className='botão-centro'>
                <button className='add-adress'> Novo Endereço </button>
                <button className='confirma'> Confirmar </button> 
            </div>

            <div className='rodapezin'>
                <Rodape />
            </div>


        </main>
    );
}