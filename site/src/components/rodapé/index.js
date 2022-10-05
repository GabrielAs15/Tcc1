// SCSS
import './index.scss'

export default function Index(){
    return(
        <div className="rodapé-page">
            <div className="coluna1">
                <div className='Titulos'>
                    <div> Departamentos </div>
                    <div> Institucional </div>
                    <div> Redes Sociais </div>
                    <div> Conta </div>
                    <div> Contato </div>
                </div>
                <div className='colunas'>    
                            <div className='linhas-c1'>
                                <div> Computadores </div>
                                <div> Periféricos </div>
                                <div> Consoles</div>
                            </div>
                            <div className='linhas2-c1'>
                                <div> Gabinetes </div>
                                <div> Monitores </div>
                                <div> Portáteis </div>
                            </div>
                    </div>
                    <div className="coluna2">
                        <div> Quem Somos </div>
                        <div> Localização </div>
                    </div>
                    <div className="coluna3">
                        <div> Minha Conta</div>
                        <div> Administrativo</div>
                    </div>
                    <div className="coluna4">
                        <div> Tel: </div>
                        <div> (11)94058-4464 </div>
                        <div> Email: </div>
                        <div> Contato@TechExpress.com </div>
                    </div>
                </div>
                <div className="parcerias">
                <div> Disponível para:</div>
                <img src="./images/playstorelogo.png"/>
                <img src="./images/appstorelogo.png"/>
            </div>
            <div className="contatos">
                <img src="./images/twitterlogo.png"/>
                <img src="./images/whatslogo.png"/>
                <img src="./images/instalogo.png"/>
                <img src="./images/linkedinlogo.png"/>
            </div>
        </div>
    )

}