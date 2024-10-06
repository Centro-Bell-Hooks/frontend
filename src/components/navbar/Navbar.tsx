import { Link, useLocation } from 'react-router-dom'
import { MouseEventHandler, useContext } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import { routes } from '../../routes'
import { AuthContext } from '../../contexts'
import { Alert } from '../alert'
import { Menubar } from './Menubar'

export function Navbar() {
    const { usuario, handleLogout } = useContext(AuthContext)
    const location = useLocation()
    const auth = location.pathname === routes.login || location.pathname === routes.cadastro
    const instituicao = usuario.tipo === 'institucional'
    const admin = usuario.tipo === 'admin'

    function logout() {
        handleLogout()
        Alert({ mensagem: 'Usuário desconectado', tipo: 'info' })
    }

    return (
        !auth && (
            <div className="fixed z-10 w-full">
                <div className="bg-primaria text-light py-6 px-8">
                    <div className="w-full flex justify-center">
                        <div className="hidden container md:flex items-center justify-between text-lg">
                            <Link to={routes.homepage}>
                                <img
                                    src="/assets/logo-bell-hooks.jpg"
                                    className="rounded-full max-w-[80px]"
                                    alt="Logo do site Bell Hooks"
                                />
                            </Link>

                            <div className="flex gap-4">
                                {location.pathname === routes.homepage ? (
                                    <>
                                        {/* colocar como link */}
                                        <LinkScroll
                                            to="inicio"
                                            className="hover:underline font-semibold cursor-pointer"
                                        >
                                            Início
                                        </LinkScroll>
                                        <LinkScroll to="sobre" className="hover:underline font-semibold cursor-pointer">
                                            Sobre
                                        </LinkScroll>
                                        <LinkScroll
                                            to="contato"
                                            smooth={true}
                                            className="hover:underline font-semibold cursor-pointer"
                                        >
                                            Contato
                                        </LinkScroll>
                                    </>
                                ) : (
                                    <>
                                        <Link to={routes.servicos} className="hover:underline font-semibold">
                                            Serviços
                                        </Link>

                                        {instituicao && (
                                            <Link
                                                to={routes.cadastrarServico}
                                                className="hover:underline font-semibold"
                                            >
                                                Cadastrar Serviços
                                            </Link>
                                        )}

                                        {admin && (
                                            <>
                                                <Link to={routes.categorias} className="hover:underline font-semibold">
                                                    Categorias
                                                </Link>
                                                <Link
                                                    to={routes.cadastrarCategoria}
                                                    className="hover:underline font-semibold"
                                                >
                                                    Cadastrar Categoria
                                                </Link>
                                            </>
                                        )}
                                        <Link to="" className="hover:underline font-semibold">
                                            Perfil
                                        </Link>
                                    </>
                                )}

                                <Link
                                    to={usuario?.token ? routes.homepage : routes.login}
                                    className="hover:underline font-semibold"
                                    onClick={usuario?.token ? logout : undefined}
                                >
                                    {usuario?.token === '' ? 'Login' : 'Sair'}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Menubar instituicao={instituicao} admin={admin} logout={logout} usuario={usuario} />
                </div>
                <hr className="bg-secundaria h-1" />
            </div>
        )
    )
}
