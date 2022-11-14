import './index.scss'
import Cabecalho from '../../components/cabecalhoUSUARIO/index.js'
import Rodape from '../../components/rodapé/index.js'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BuscaporId } from '../../api/usuario/produtoAPI';


export default function Index(){
    const [produto, setProduto] = useState({})


    const { id } = useParams();

    async function carregarPagina(){
        const r = await BuscaporId(id);
        console.log(r);
    }

    useEffect(() => {
        carregarPagina();
    }, [])

    return(
        <div className="page-produto">
            <Cabecalho />
            <div className='box-produto-page'>
                <div className="imagem-produto">
                    <img className='imagem-produto-capa' src="./images/placaGTX 38.png"/>
                </div>
                <div className="nome-produto-título">
                    <div className='nome-produto'> Placa de Vídeo MSI NVIDIA Geforce GTX 1050 Ti Gaming X 4G, GDDR5 </div>
                    <div className='preco-produto'> DE: R$2.000,00 </div>
                    <div className='desconto-produto'> POR: R$ 1.764,69 </div>
                    <button className='botao-produto'> Adicionar ao Carrinho </button>
                </div>
            </div>
            <div className="descricao-produto">
                <div> Descrição do Produto: Placa de vídeo Nvidia Geforce gtx 1050 2GB GDDR5 Gigabyte GV-N1050G1 Gaming 2GProvavelmente o item mais importante do setup. Ela serve para dar desempenho nos jogos, ela faz a renderização dos gráficos, garantindo assim uma excelente experiência enquanto você estiver jogando. A placa de vídeo Nvidia Geforce gtx 1050 conta com 2GB de memória GDDR5, gpu Boost, cuda, sistema de refrigeração, Directx 12, OpenGL e tras um desempenho com estabilidade para o seu pc gamer.com múltiplas saídas de vídeo (Diplay port, hdmi e dvi) você pode utilizar mais de um monitor caso seja necessário. Através do Geforce Experience controle a sua placa de vídeo e faça a gestão das especificações. A sua placa de vídeo Geforce gtx Series possui 640 cuda cores e conta com a tecnologia nvidia GameStream. GEFORCE gtx 1050EQUIPAMENTO indispensável para todo GAMERTodo mundo merece jogar de um jeito incrível. Por isso, criamos a rápida e potente GeForce gtx 1050. Agora, você pode transformar seu pc em uma verdadeira plataforma de games, com a tecnologia da nvidia Pascal a mais avançada arquitetura de placa de vídeo já criada. Ela vem com as tecnologias inovadoras nvidia Game Ready, que fazem todo gamer vivenciar os últimos lançamentos na mais suprema glória. NVIDIA PASCALAs placas de vídeo GeForce gtx Série 10 são equipadas com Pascal para oferecer até 3X o desempenho das placas da geração anterior, além de tecnologias revolucionárias de games e experiências em vr. O clock máximo da placa chega a 1556Mhz, e além disso ela possui 128 Bit. - Resolução máxima Display port: 7680x4320- Resolução máxima hdmi: 4096x2160- Resolução máxima dvi: 2560x1600- Chipset: Geforce gtx 1050- Memória: 2GB- Tecnologia da memória: GDDR5- Conexão: pci Express x16- Plataforma: 128 Bit- Cuda cores: 640- Clock da memória: 7Gbps- Vários monitores: Sim, até 4- DirectX: 12- OpenGL: Sim- Conector de energia: 6 pinos- Conexões: 3x hdmi, 1x Display Port e 1x dvi- Garantia: 1 anoATENÇÃO: Imagens são meramente ilustrativas. modelo: 58449 </div>
            </div>
            <Rodape />
        </div>
    )
}