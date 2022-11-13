import './index.scss';
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'

export default function Index(){

    return(
        <main className='entrega-page'>
            <Cabecalho />
            
            <div className='content-express'>
                
                <div className='Span'>
                        <span> J </span>
                    </div>
                <div className='express-info'>
                    
                    <div> Rua dos Bobos n°0 </div>
                    <div className='textos2'> Liberdade </div>

                </div>
                <div className='express-country'>
                    <div> São Paulo, SP </div>
                    <div className='text2'> Brasil </div> 
                </div>
                
            </div>
            <div className='rodapezin'> 
                <Rodape />
            </div>
            
        </main>
    );
}