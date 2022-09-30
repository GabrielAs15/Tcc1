import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastroUsuario(nome, email, celular, cpf, senha){
    const r = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        celular: celular,
        cpf: cpf,
        senha: senha
    })
}