import { Link } from 'react-router-dom';
import './index.scss';

export default function Index(){
    return(
        <div className='Page-Login'>
            <h1 className='Login'> LOGIN </h1>
            <div className='input'>
                <input type="text" placeholder='E-mail' className='Email'/>
                <input type='password'  placeholder='•••••' className='senha'/>
                <div className='Botão'>
                    <img src='./images/foto1.png'/>
                    <a> ENTRAR </a>
                </div>
            </div>
            <p> Não tem uma conta? </p>
            <p> Cadastre-se!</p>
        </div>
    );
}