
// React scss
import './cadastroUsuario.scss';
import {Link} from 'react-router-dom'
    
export default function cadastroUsuario (){
    return(
        <main className="cont01">
            <div className='cont02'>
                
                <h1 className='titulo'>Cadastro</h1>

                <div className="cont03">

                    <div className="sub-cont01">
                        <input type="text" placeholder='Nome'></input>
                        <input type="text" placeholder='Senha'></input>
                        <input type="text" placeholder='Confirmar senha'></input>    
                    </div>
                    <div className="sub-cont01">
                        <input type="text" placeholder='E-mail'></input>
                        <input type="text" placeholder='Celular'></input>
                        <input type="text" placeholder='CPF'></input>    
                    </div>
                </div>
                    <button className="botao-cadastro">
                        <img src="../../public/images/image 14.png"></img>    
                            Cadastrar
                    </button>
                    <div>
                        <Link to='../login'>sexo</Link>
                    </div>
            </div>
        </main>
    )
}