import './index.scss'

import { useState } from 'react';
import { listarEndereco } from '../../api/usuario/enderecoAPI';
export default function End({ item: { id, cep, bairro, cidade, estado, numero, endereco}, selecionar, selecionado }){

    return(

        <div className='content-express' onClick={() => selecionar(id)} style={{borderColor: selecionado ? '#ff1100' : '##d0cdd1'}}>
                        
                        <div className='Span'>
                            <span> J </span>
                        </div>
                        <div className='express-info'>

                            <div> {endereco} {numero} </div>
                            <div className='textos2'> {bairro}</div>

                        </div>
                        <div className='express-country'>
                            <div> {cidade} , {estado} </div>
                            <div className='text2'> {cep} </div>
                        </div>
        </div>
    )
}