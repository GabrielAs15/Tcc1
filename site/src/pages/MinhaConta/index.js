import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'
export default function Index() {

    return (
        <div className='page-conta-cliente'>
            <div className='cabecalho-comp'>
                <Cabecalho />
            </div>
            <div className='barra-e-card'>
                <div className='Cont-conta-cliente'>
                    <div className='barra-pages'>
                        <p className='black'> Minha Conta</p>
                        <p className='text-conta-cliente'> Meus dados</p>
                        <p className='text-conta-cliente'> Meus pedidos</p>
                        <p className='text-conta-cliente'> Endereços</p>
                    </div>
                </div>
                <div className='cards-cliente-infor'>
                    <div className='Dados-card-cliente'>
                        <div className='titulo-card'> Dados de Login </div>
                        <div> Fulano da Silva </div>
                        <div> fulanosilva06@gmail.com </div>
                        <div> (00)00000-0000 </div>
                        <button className='button-alterar'> Alterar </button>
                    </div>
                    <div className='Dados-card-cliente'>
                        <div className='titulo-card'> Endereços </div>
                        <div> Rua dos Bobos N°0 </div>
                        <div> São Paulo, SP </div>
                        <div> Brasil </div>
                        <button className='button-alterar'> Alterar </button>
                    </div>
                </div>
                <div className='Dados-card-cliente-baixo'>
                        <div className='titulo-card'> Endereços </div>
                        <div> Rua dos Bobos N°0 </div>
                        <div> São Paulo, SP </div>
                        <div> Brasil </div>
                        <button className='button-alterar'> Alterar </button>
                </div>
            </div>
            <div className='rodape-comp'>
                <Rodape />
            </div>

        </div>
    )

}