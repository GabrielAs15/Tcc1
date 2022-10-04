// React
import LoadingBar from 'react-top-loading-bar';

// React scss
import './index.scss';

// Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef  } from 'react';   
import storage from 'local-storage'

// Api
import { login } from '../../api/loginAPI';


export default function Index(){

  

    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [Carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    // const refe = useRef(null);


    async function entrarClick() {
        // ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await login(email, senha);
            if(r){
                storage('usuario-logado', r)
                setTimeout(() => {
                    navigate('/cadastro');
                }, 3000)
            }
            else {
                alert("Credenciais inválidas!")
            }
        }
        catch (err){
           // ref.current.complete();
            setCarregando(false);
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }

    return(
        <div className='Page-Login'>


            <h1 className='Login'> LOGIN </h1>
            <div className='input'>
                <input type="text" placeholder='E-mail' className='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password'  placeholder='•••••' className='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                <div className='Botão'>
                    <img src='./images/image 23 (1).png'/>
                    <div onClick={entrarClick} disable={Carregando}> ENTRAR </div>
                </div>
            </div>
            <p> Não tem uma conta? </p>
            <p> Cadastre-se!</p>
        </div>
    );
}