import axios from 'axios'
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email,senha){
    const r = await api.post('/login', {
        email: email,
        senha: senha
    });
    return r.data;
}
