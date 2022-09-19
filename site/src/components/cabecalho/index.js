import { useState } from 'react';
import './index.scss';

export default function Index(){
const [menu, setMenu] = useState(false);


    function MostrarMenu(){
        setMenu(true)
    }

    return(
        <header className="cabecalho-page">
            <div>
            <img src="./images/menu.png" className="menu" onClick={MostrarMenu} />
            </div>
            
            {menu === true &&
                <div className='menu-page'>
                    
                    <div className='menu-content'>
                         <p className='t3'> MENU </p>  
                        <div className='lines'>
                            <div className='line1'>
                                <img src='' />
                                <a> Meu Perfil</a>
                            </div>
                            <div className='line2'>Gereciar Pedidos</div>
                            <div className='line3'>Produtos</div>
                            <div className='line4'>Histórico de Pedidos</div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='b1'> Login </button>
                        <button className='b2'> Sair </button>
                    </div>
                </div>
                
            }
            <img src="./images/logoT 3.png" className='logo'/>
            <div className='t1'> ADMINISTRADOR </div>    
            <div className='t2'> Entrar </div>        
            <img src="./images/image 16.png" alt="faq" className='faq'/>
            <img src="./images/image 15.png" alt="carrinho" className='carrinho'/> 
        </header>
    );
}