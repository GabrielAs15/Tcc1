import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index(){
    return (
    <main className="cont01">
    
        <div className='cont02'>
            <ToastContainer />
                <h1 className='titulo'>Cadastro <br/> Endereço</h1>
            

                <div className="cont03">

                    <div className="sub-cont01">
                        <input type="text" placeholder='Endereço'/>
                        <input type="text" placeholder='Bairro' />
                        <input type="text" placeholder='Complemento' />
                    </div>
                    <div className="sub-cont01">
                        <input type="text" placeholder='Número'  />
                        <input type="text" placeholder='Referência' />
                        <input type="text" placeholder='Cidade' />
                    </div>
                </div>
                <button className="botao-cadastro"  >
                    <img src="/images/image14.png" />
                    Cadastrar

                </button>
            </div>
    </main>
    );
}