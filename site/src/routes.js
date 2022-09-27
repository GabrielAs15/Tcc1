import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index.js'

import Cadastro from './pages/Cadastro/index.js'

import CadastroCliente from './pages/cadastroUsuario/cadastroUsuario.js'

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/CadastroCliente" element={<CadastroCliente />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}