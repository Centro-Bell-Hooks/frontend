import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts'

import { routes } from '../../routes'
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
                    <Link to={routes.produtos} className="hover:underline font-bold">
                        Produtos
                    </Link>
                    <Link to={routes.cadastrarProduto} className="hover:underline font-bold">
                        Cadastrar Produtos
                    </Link>
                    <Link to={routes.categorias} className="hover:underline font-bold">
                        Categorias
                    </Link>
                    <Link to={routes.cadastrarCategoria} className="hover:underline font-bold">
                        Cadastrar Categoria
                    </Link>

                    <Link
                        to={usuario.token ? routes.homepage : routes.login}
                        className="hover:underline font-bold"
                        onClick={usuario.token ? logout : undefined}
                    >
                        {usuario.token === '' ? 'Login' : 'Sair'}
                    </Link>
                </div>
            </div>
        </div>
    )
}
