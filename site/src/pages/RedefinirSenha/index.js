import './index.scss'

import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalhoUSUARIO'
export default function Index(){
    return(
        <main className='page'>
                <div className='cont-01'>
                    <h1 className='senhaT'>Digite uma <br/> nova senha</h1>
                    
                    <div className='camp'>
                        <div className='campo'>
                            <input type='text' placeholder='Nova-senha' className='senha' />
                            <img className='senhaI' src='./images/image 53.png'/>
                        </div>
                        <div className='campo'>
                            <input type='text' placeholder='Confirme a nova senha' className='senha' />
                            <img className='senhaI' src='./images/image 53.png'/>
                        </div>
                    </div>

                    <button className='alteraB'>Alterar</button>
                </div>
        </main>
    )
}