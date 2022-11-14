
// React scss
import './cadastroUsuario.scss';
import { Link, useNavigate } from 'react-router-dom'

// API
import { cadastroUsuario } from '../../api/usuario/cadastrousuarioAPI.js';
import { useState } from 'react';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarsenha, setconfirmarSenha] = useState('');

    const navigate = useNavigate();

    async function navegar (){
        navigate('/Login')
    }

    async function salvarClick() {
        try {


            const novoUsuario = await cadastroUsuario(nome, email, celular, cpf, senha);

            if (confirmarsenha == senha)
                setconfirmarSenha('')

            else
                alert("As senhas não coincidem");

            toast.dark('🚀 Cadastro feito com sucesso! ');

            navegar();
            

        } catch (err) {
            alert(err.response.data.erro);
        }

    }

    return (
        <main className="cont01">

            <div className='cont02'>
            <ToastContainer />
                <h1 className='titulo'>Cadastro</h1>

                <div className="cont03">

                    <div className="sub-cont01">
                        <input type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                        <input type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        <input type="password" placeholder='Confirmar senha' value={confirmarsenha} onChange={e => setconfirmarSenha(e.target.value)} />
                    </div>
                    <div className="sub-cont01">
                        <input type="text" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder='Celular' value={celular} onChange={e => setCelular(e.target.value)} />
                        <input type="text" placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)} />
                    </div>
                </div>
                <button className="botao-cadastro" onClick={salvarClick} >
                    <img src="/images/image14.png" />
                    Cadastrar

                </button>
                <div>
                    <p> Não tem uma conta? </p>
                    <Link to='../login'> Cadastre-se!</Link>
                </div>
            </div>
        </main>
    )
}