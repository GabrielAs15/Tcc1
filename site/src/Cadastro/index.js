import './index.scss';

export default function Index() {
    return (
        <div className="Page-Cadastro">
            <div className="Salvar"> 
                <input type="file" placeholder='Salvar Imagem' />
                <img src="./images/image 30.png" />
            </div>
            <input type="text" placeholder="Nome do produto" />
            <input type="text" placeholder="Preço" />
            <input type="text" placeholder="Desconto" />
            <input type="text" placeholder="Estoque" />
            <div>
                    <label>Departamento:</label>
                    <select>
                        <option selected disabled hidden>Selecione</option>
                    </select>
                </div>
            <div>
                    <label>Marca:</label>
                    <select>
                        <option selected disabled hidden>Selecione</option>
                    </select>
            </div>
            <textarea placeholder="Descrição do Produto" />
            
            <button> Cadastrar </button>
        </div>
    );
}