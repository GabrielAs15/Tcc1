import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index.js'

import Cadastro from './pages/Cadastro/index.js'

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}