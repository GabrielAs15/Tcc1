// React
import LoadingBar from 'react-top-loading-bar';

// React scss
import './index.scss';

// Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef  } from 'react';   
import storage from 'local-storage'

// Api
import { loginUsuario } from '../../api/usuario/loginusuarioAPI';


export default function Index(){

  

    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [Carregando, setCarregando] = useState(false);

    const navigate = useNavigate();


    async function entrarClick() {
        //setCarregando(true);

        try {
            const r = await loginUsuario(email, senha);
            if(r){
                storage('usuario-logado', r)
                setTimeout(() => {
                    navigate('/MinhaConta');
                }, 3000)
            }
            
        }
        catch (err){
            setCarregando(false);
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/MinhaConta')
    }
})

    return(
        <div className='Page-Login'>


            <h1 className='Login'> LOGIN </h1>
            <div className='input'>
                <input type="text" placeholder='E-mail' className='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password'  placeholder='•••••' className='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                <div className='Botão'>
                    <img src='./images/f1.png'/>
                    <div onClick={entrarClick}  className="entrar"> ENTRAR </div>
                </div>
            </div>
            <div className='link'>
                <p> Não tem uma conta? </p>
                <Link to="/CadastroCliente" className='cadastre'> Cadastre-se! </Link>
            </div>
        </div>
    );
}