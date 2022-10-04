// React
import LoadingBar from 'react-top-loading-bar';

// React scss
import './index.scss';

// Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef  } from 'react';   
import storage from 'local-storage'

// Api
import { loginUsuario } from '../../api/loginusuarioAPI';


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
            const r = await loginUsuario    (email, senha);
            if(r){
                storage('usuario-logado', r)
                setTimeout(() => {
                    navigate('/BuscarProduto');
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
                    <img src='./images/f1.png'/>
                    <div onClick={entrarClick} disable={Carregando} className="entrar"> ENTRAR </div>
                </div>
            </div>
            <div className='link'>
                <p> Não tem uma conta? </p>
                <Link to="/CadastroCliente" className='cadastre'> Cadastre-se! </Link>
            </div>
        </div>
    );
}