import api from './api'

// Faz login e salva o token no localStorage
export async function login(email, senha) {
    const response = await api.post('/token/', {
        username: email,
        password: senha
    })

    // Salva os tokens no localStorage para usar nas próximas requisições
    localStorage.setItem('access_token', response.data.access)
    localStorage.setItem('refresh_token', response.data.refresh)

    return response.data
}

// Remove os tokens do localStorage
export function logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

// Verifica se o usuário está logado
export function estaLogado() {
    return !!localStorage.getItem('access_token')
}