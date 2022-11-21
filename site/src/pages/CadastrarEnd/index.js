import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {salvarEndereco} from '../../api/usuario/enderecoAPI.js'
import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

export default function Index(){
const [endereco, setEndereco] = useState('');
const [bairro, setBairro] = useState('');
const [cidade, setCidade] = useState('');
const [estado, setEstado] = useState('');
const [numero, setNumero] = useState();
const [cep, setCep] = useState('');

    const navigate = useNavigate();

    async function salvar(){
        try{
        const id = Storage('usuario-logado').id;
        const r = await salvarEndereco(id, endereco, bairro, cidade, estado, numero, cep);
        toast.dark('Endereço salvo');
        setTimeout(() => {
            navigate('/Entrega')
        }, 3000)
        
        }
        catch(err){
            toast.error(err.response.data.erro)
        }
    }

   
    return (
    <main className="cont01">
    
        <div className='cont02'>
            <ToastContainer />
                <h1 className='titulo'>Cadastro <br/> Endereço</h1>
            

                <div className="cont03">

                    <div className="sub-cont01">
                        <input type="text" placeholder='Endereço' value={endereco} onChange={e => setEndereco(e.target.value)}/>
                        <input type="text" placeholder='Bairro' value={bairro} onChange={e => setBairro(e.target.value)}/>
                        <input type="text" placeholder='Cidade' value={cidade} onChange={e => setCidade(e.target.value)}/>
                    </div>
                    <div className="sub-cont01">
                        <input type="text" placeholder='Estado' value={estado} onChange={e => setEstado(e.target.value)} />
                        <input type="text" placeholder='Número' value={numero} onChange={e => setNumero(e.target.value)}/>
                        <input type="text" placeholder='Cep' value={cep} onChange={e => setCep(e.target.value)}/>
                    </div>
                </div>
                <button className="botao-cadastro"  onClick={salvar}>
                    Cadastrar

                </button>
            </div>
    </main>
    );
}