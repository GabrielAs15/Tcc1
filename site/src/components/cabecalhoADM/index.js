import { useEffect, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'


export default function Index() {

    const [menu, setMenu] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (!storage('admin-logado')) {
            navigate('/Login')
        }
        else if (storage('admin-logado')){
            navigate('/cadastro')
        }
    }, [])

    async function sairClick() {
        storage.remove('admin-logado');
        navigate('/Login')
    }

    function MostrarMenu() {
        setMenu(true)
    }

    function TirarMenu() {
        setMenu(false)
    }

    return (
        <header className="cabecalho-page" >
            <div>
                <img src="./images/menu.png" className="menu" onClick={MostrarMenu} />
            </div>

            {menu === true &&
                <div className='menu-page'>

                    <div className='menu-content'>
                        <p className='t3'> MENU </p>

                        <div className='exit'> <img src='/images/x.png' onClick={TirarMenu} className="x" /> </div>

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
                        <button className='b2' onClick={sairClick}> Sair </button>
                    </div>
                </div>

            }
            <img src="./images/logoT 3.png" className='logo' />
            <div className='t1'> ADMINISTRADOR </div>
            <div className='t2'> Entrar </div>
            <img src="./images/image 16.png" alt="faq" className='faq' />
            <img src="./images/image 15.png" alt="carrinho" className='carrinho' />

        </header>

    );
}