import { createContext, ReactNode, useState } from 'react'

import { UsuarioLogin } from '../models'
import { auth } from '../services'

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

export function AuthProviders({ children }: AuthProvidersProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            await auth(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert('Usuário logado.')
        } catch (error) {
            console.log('ERROR', error)
            alert('Os dados do usuário estão inconsistentes')
        }

        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
