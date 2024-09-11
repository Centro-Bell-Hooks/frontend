import { createContext, ReactNode, useState } from 'react'

import { UsuarioLogin } from '../models'
import { auth } from '../services'
import { Alert } from '../components'

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

interface AuthProvidersProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const valoresIniciais = {
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    tipo: '',
    token: '',
}

export function AuthProviders({ children }: AuthProvidersProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>(valoresIniciais)
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            await auth(`/usuarios/logar`, usuarioLogin, setUsuario)
            Alert({ mensagem: 'Usuário logado!' })
        } catch (err) {
            console.error(err)
            Alert({ mensagem: 'Os dados do usuário estão inconsistentes.', tipo: 'error' })
        }

        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario(valoresIniciais)
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
// tirei o export default AuthContext
