import './index.scss';
import Cabecalho from '../../components/cabecalho/index.js'

export default function Index() {
    return (
        <main className="Page-Cadastro">
             <Cabecalho className="cabecalho" />

            <div className='container'>
                    <div className="content">
                        <div className="Save"> 
                            <input type="file" placeholder='Salvar Imagem' id='file' />
                            <img src="./images/image 30.png" className="f1" />
                            <p> Salvar Imagem </p>
                        </div>
                        
                        <div className='inputs'>
                            <input type="text" placeholder="Nome do produto" />
                            <input type="text" placeholder="Preço" />
                            <input type="text" placeholder="Desconto" />
                            <input type="text" placeholder="Estoque" />
                            <div>
                                
                                <select>
                                    <option selected disabled hidden>Departamento</option>
                                </select>
                            </div>
                            <div>
                                    <select>
                                        <option selected disabled hidden>Marca</option>
                                    </select>
                            </div>
                            
                        </div>
                       
                    </div>
            </div>
                <textarea placeholder="Descrição do Produto" />
                <button className='button-register'> Cadastrar </button>
        </main>
    );
}