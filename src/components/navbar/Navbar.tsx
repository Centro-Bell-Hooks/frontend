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
        <>
            <div className="w-full bg-primaria text-light flex justify-center py-4">
                <div className="container flex items-center justify-between text-lg">
                    <img src="src/assets/logo-bell-hooks.jpg" className="rounded-full max-w-[80px]" />
                    {/* <Link to={routes.homepage} className="text-2x1 font-bold ml-4">
                    Centro Bell Hooks
                </Link> */}

                    <div className="flex gap-4">
                        {location.pathname === routes.homepage ? (
                            <>
                                <div className="hover:underline font-bold">Sobre</div>
                                <div className="hover:underline font-bold">Contato</div>
                            </>
                        ) : (
                            <>
                                <Link to={routes.servicos} className="hover:underline font-semibold">
                                    Serviços
                                </Link>
                                <Link to={routes.cadastrarServico} className="hover:underline font-semibold">
                                    Cadastrar Serviços
                                </Link>
                                <Link to={routes.categorias} className="hover:underline font-semibold">
                                    Categorias
                                </Link>
                                <Link to={routes.cadastrarCategoria} className="hover:underline font-semibold">
                                    Cadastrar Categoria
                                </Link>

                                <Link
                                    to={usuario.token ? routes.homepage : routes.login}
                                    className="hover:underline font-bold"
                                    onClick={usuario.token ? logout : undefined}
                                >
                                    {usuario.token === '' ? 'Login' : 'Sair'}
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <hr className="bg-secundaria h-1" />
        </>
    )
}
