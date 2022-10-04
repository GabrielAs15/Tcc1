import axios from 'axios';
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function loginUsuario(email,senha){
    const r = await api.post('/login/usuario', {
        email: email,
        senha: senha
    });
    return r.data;
}
