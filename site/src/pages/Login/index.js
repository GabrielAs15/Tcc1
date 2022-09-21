import { Link } from 'react-router-dom';
import './index.scss';
import axios from 'axios';
import { useState } from 'react';

export default function Index(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    async function entrarClick(){
        
    }
    return(
        <div className='Page-Login'>
            <h1 className='Login'> LOGIN </h1>
            <div className='input'>
                <input type="text" placeholder='E-mail' className='Email'/>
                <input type='password'  placeholder='•••••' className='senha'/>
                <div className='Botão'>
                    <img src='./images/praentrar.png'/>
                    <a> ENTRAR </a>
                </div>
            </div>
            <p> Não tem uma conta? </p>
            <p> Cadastre-se!</p>
        </div>
    );
}