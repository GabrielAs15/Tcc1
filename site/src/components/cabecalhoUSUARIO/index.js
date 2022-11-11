import { useEffect, useState } from 'react';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function Index() {

    const [menu, setMenu] = useState(false);
    const [perifericos, setPerifericos] = useState(false);
    const [hardwere, setHardwere] = useState(false);
    const [consoles, setConsoles] = useState(false);
    const [active1, setMode] = useState(false);
    const [active2, setMode2] = useState(false);
    const [active3, setMode3] = useState(false);
    const ToggleMode = () => {
        setMode(!active1)
    }
    const ToggleMode2 = () => {
        setMode2(!active2)
    }
    const ToggleMode3 = () => {
        setMode3(!active3)
    }



    const navigate = useNavigate();


    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/LoginUsuario')
        }
        else if (storage('usuario-logado')) {
            navigate('')
        }
    }, [])

    async function sairClick() {
        storage.remove('usuario-logado');
        navigate('/LoginUsuario')
    }

    function MostrarMenu() {
        setMenu(true)
    }

    function TirarMenu() {
        setMenu(false)
    }

    function MostrarPerifericos() {
        setPerifericos(true)
    }

    function MostrarHardwere() {
        setHardwere(true)
    }

    function MostrarConsoles() {
        setConsoles(true);

    }

    function FecharPerifericos() {
        if (perifericos === true)
            setPerifericos(false)
    }

    function FecharHardwere() {
        if (hardwere === true)
            setHardwere(false)
    }

    function FecharConsoles() {
        if (consoles === true)
            setConsoles(false)
    }
    return (
        <header className="cabecalho-pagin" >

            <img src="./images/menu.png" className="menu" onClick={MostrarMenu} />


            {menu === true &&
                <nav className='menu-page'>
                    <Scrollbars className="scroll" style={{ width: 300, height: 100 }}>

                        <div className='menu-contents'>
                            <p className='t3'> MENU </p>

                            <div className='exit'> <img src='/images/x.png' onClick={TirarMenu} className="x" /> </div>

                            <div className='lines'>
                                <div className='linha1'>
                                    <img src='' />
                                    <a> Meu Perfil</a>
                                </div>
                                <div className='perifericos' onClick={ToggleMode}>
                                    <div className='linha2'> periféricos </div>
                                    <img className={active1 ? "seta setaActive" : "seta"} src='./images/setabaixo.png' onClick={perifericos ? FecharPerifericos : MostrarPerifericos} />
                                </div>
                                {perifericos === true &&
                                    <div className='c1'>
                                        <div className='c1-txt'> mouse </div>
                                        <div className='c1-txt'> teclado </div>
                                        <div className='c1-txt'> headset </div>
                                        <div className='c1-txt'> controle </div>
                                    </div>
                                }
                                <div className="perifericos" onClick={ToggleMode2}>
                                    <div className='linha3'> hardwere </div>
                                    <img className={active2 ? "seta setaActive" : "seta"} src='./images/setabaixo.png' onClick={hardwere ? FecharHardwere : MostrarHardwere} />
                                </div>
                                {hardwere === true &&
                                    <div className='c1'>
                                        <div className='c1-txt'> placa-mãe </div>
                                        <div className='c1-txt'> placa de vídeo </div>
                                        <div className='c1-txt'> memória ram </div>
                                        <div className='c1-txt'> SSD </div>
                                        <div className='c1-txt'> HD </div>
                                        <div className='c1-txt'> coolers </div>
                                    </div>
                                }
                                <div className='perifericos' onClick={ToggleMode3}>
                                    <div className='linha4'> consoles </div>
                                    <img className={active3 ? "seta setaActive" : "seta"} src='./images/setabaixo.png' onClick={consoles ? FecharConsoles : MostrarConsoles} />
                                </div>
                                {consoles === true &&
                                    <div className='c1'>
                                        <div className='c1-txt'> Xbox </div>
                                        <div className='c1-txt'> Playstion 4</div>
                                    </div>
                                }
                                <div className='linha5'> monitor </div>
                                <div className='linha6'> computadores </div>
                                <div className='linha7'> portáteis </div>
                                <div className='linha8'> gabinetes </div>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button className='b1'> Login </button>
                            <button className='b2' onClick={sairClick}> Sair </button>
                        </div>
                    </Scrollbars>
                </nav>

            }
            <Link to="/">
                <img src="./images/logoT 3.png" className='logo' />
            </Link>
            <div className='t1'>
                <input type='text' />
                <img className="lupa" src='./images/lupa.png' style={{ width: 40 }} />
            </div>
            <div className='t2'> Entrar </div>
            <Link to="/SobreNos">
                <img src="./images/image 16.png" alt="faq" className='faq' />
            </Link>
            <img src="./images/image 15.png" alt="carrinho" className='carrinho' />

        </header>

    );
}