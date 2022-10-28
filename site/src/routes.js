import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index.js'

import Cadastro from './pages/Cadastro/index.js'

import CadastroCliente from './pages/cadastroUsuario/cadastroUsuario.js'

import BuscarProduto from './pages/BuscarProduto/BuscarProdutos.js'

import LoginUsuario from './pages/LoginUsuario/index.js'

import Test from './components/carrinhoProtudo/index.js'

import MeusPedidos from './pages/MeusPedidos/index.js'

import MeusDados from './pages/MeusDados/index.js'

import Enderecos from './pages/Enderecos/index.js'

import PaginaProduto from './pages/PáginaProduto/index.js'

import Carrinho from './pages/Carrinho'

import Entrega from './pages/Entrega'

import PagCartao from './pages/PagCartao'

import Revisar from './pages/Revisar'

import MinhaConta from './pages/MinhaConta/index.js'
export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/CadastroCliente" element={<CadastroCliente />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/produto/:idParam" element={<Cadastro />} />
                <Route path='/BuscarProduto' element={<BuscarProduto />} />
                <Route path='/LoginUsuario' element={<LoginUsuario />} />
                <Route path='/Test' element={<Test/>} />
                <Route path='/PaginaProduto' element={<PaginaProduto/>} />
                <Route path='/MeusDados' element={<MeusDados/>}/>
                <Route path='/MeusPedidos' element={<MeusPedidos/>}/>
                <Route path="/Enderecos" element={<Enderecos/>}/>
                <Route path="/Carrinho" element={<Carrinho/>}/>
                <Route path="/Entrega" element={<Entrega/>}/>
                <Route path="/PagamentoCartao" element={<PagCartao/>}/>
                <Route path="/Revisar" element={<Revisar/>}/> 
                <Route path='/MinhaConta' element={<MinhaConta/>}/>
            </Routes>
        </BrowserRouter>
    );  
}