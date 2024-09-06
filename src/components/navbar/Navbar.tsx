import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import { routes } from '../../routes'
import { AuthContext } from '../../contexts'
import { Alert } from '../alert'

export function Navbar() {
    const { usuario, handleLogout } = useContext(AuthContext)
    const location = useLocation()

    function logout() {
        handleLogout()
        Alert({ mensagem: 'Usuário desconectado', tipo: 'info' })
    }

    return (
        <div className="w-full bg-primaria text-white flex justify-center py-4">
            <div className="container flex justify-between text-lg">
                <Link to={routes.homepage} className="text-2x1 font-bold ml-4">
                    Centro Bell Hooks
                </Link>

                <div className="flex gap-4">
                    {location.pathname === routes.homepage && (
                        <>
                            <div className="hover:underline font-bold">Sobre</div>
                            <div className="hover:underline font-bold">Contato</div>
                        </>
                    )}

                    {usuario.token == '' ? (
                        <Link to={routes.login} className="hover:underline font-bold">
                            Login
                        </Link>
                    ) : (
                        <Link to={routes.homepage} className="hover:underline font-bold" onClick={logout}>
                            Sair
                        </Link>
                    )}

                    <Link to={routes.categoria} className="hover:underline font-bold">
                        Categorias
                    </Link>
                </div>
            </div>
        </div>
    )
}
