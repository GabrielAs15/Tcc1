// SCSS
import './index.scss'

export default function Index() {
    return (
        <div className="rodapé-page">

            <div className='coluna'>
                <div className='Título'> Departamentos </div>
                <div className='Título'> Institucional </div>
                <div className='Título'> Conta </div>
                <div className='Título'> Contato </div>

            </div>

            <div className='colunas'>
                <div className="coluna1">
                    <div className='linhas-c1'>
                        <div className='sla'> Computadores </div>
                        <div className='sla'> Periféricos </div>
                        <div className='sla'> Consoles</div>
                    </div>
                    <div className='linhas2-c1'>
                        <div className='sla'> Gabinetes </div>
                        <div className='sla'> Monitores </div>
                        <div className='sla'> Portáteis </div>
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

            <div className='pt-baixo'>
                <div> Disponível para:</div>
                <div className="parcerias">
                    <div className='f1'> 
                        <img src="./images/playstorelogo.png" />
                    </div>
                    <img src="./images/appstorelogo.png" />
                </div>
                <div className="contatos">
                    <img src="./images/twitterlogo.png" className='logos'/>                    
                    <img src="./images/whatslogo.png" className='logos'/>
                    <img src="./images/instalogo.png" className='logos'/>
                    <img src="./images/linkedinlogo.png" className='logos'/>
                </div>
            </div>
        </div>
    )

}