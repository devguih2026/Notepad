{/* renders the Login component */}

// Importa o CSS da página
import './Login.css'

// Importa o useState para controlar os campos do formulário
import { useState } from 'react'

// Importa o useNavigate para redirecionar após o login
// useNavigate é um hook do react-router-dom que permite navegar entre páginas via código
import { useNavigate } from 'react-router-dom'

// Importa a função de login do authService
import { login } from '../../services/authService'

// Componente da página Login
function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    // Estado para mensagem de erro caso o login falhe
    const [erro, setErro] = useState(null)

    // Estado para controlar se está carregando
    const [carregando, setCarregando] = useState(false)

    // Hook que permite navegar para outra página via código
    const navigate = useNavigate()

    // Função executada quando o formulário é enviado
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setCarregando(true)
            setErro(null)

            // Chama o authService que faz a requisição para o Django
            await login(email, senha)

            // Se o login funcionar, redireciona para a Home
            navigate('/')

        } catch (error) {
            // Se der erro, exibe mensagem na tela
            setErro('Email ou senha incorretos. Tente novamente.')
            console.error(error)
        } finally {
            setCarregando(false)
        }
    }

    return (
        <main className="login">
            <div className="login-card">

                <h2>Entrar</h2>
                <p>Acesse sua conta para gerenciar suas notas</p>

                {/* Exibe mensagem de erro se houver */}
                {erro && <p className="login-erro">{erro}</p>}

                <form onSubmit={handleSubmit}>

                    <div className="login-campo">
                        <label>Usuário</label>
                        <input
                            type="text"
                            placeholder="seu usuário"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-campo">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="sua senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>

                    {/* Botão desabilitado enquanto carrega */}
                    <button type="submit" disabled={carregando}>
                        {carregando ? 'Entrando...' : 'Entrar'}
                    </button>

                </form>

            </div>
        </main>
    )
}

export default Login