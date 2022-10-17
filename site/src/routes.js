import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index.js'

import Cadastro from './pages/Cadastro/index.js'

import CadastroCliente from './pages/cadastroUsuario/cadastroUsuario.js'

import BuscarProduto from './pages/BuscarProduto/BuscarProdutos.js'

import LoginUsuario from './pages/LoginUsuario/index.js'

import Test from './components/carrinhoProtudo/index.js'

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
            </Routes>
        </BrowserRouter>
    );  
}