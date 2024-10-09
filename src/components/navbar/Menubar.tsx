import { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../dialog'
import { Button } from '../button'
import { routes } from '@/routes'

type MenubarProps = {
    instituicao: boolean
    admin: boolean
    usuario: { token: string }
    logout: MouseEventHandler<HTMLAnchorElement>
}

// Arrumar a estilização do Menubar
export function Menubar({ instituicao, admin, usuario, logout }: MenubarProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
            <Dialog open={open} onOpenChange={setOpen}>
                <div className="flex items-center justify-between">
                    <Link to={routes.homepage}>
                        <img
                            src="/assets/logo-bell-hooks.jpg"
                            className="rounded-full max-w-[80px]"
                            alt="Logo do site Bell Hooks"
                        />
                    </Link>

                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <img src="/assets/icone-menubar.svg" />
                        </Button>
                    </DialogTrigger>
                </div>
                <DialogContent className="bg-light">
                    <div className="pt-14 w-full text-center">
                        {location.pathname === routes.homepage ? (
                            <>
                                {/* colocar como link */}
                                <hr className="bg-primaria w-full mb-3" />
                                <LinkScroll to="inicio" className="hover:underline">
                                    <DialogTitle>Início</DialogTitle>
                                </LinkScroll>
                                <hr className="bg-primaria w-full my-3" />
                                <LinkScroll to="sobre" className="hover:underline">
                                    <DialogTitle>Sobre</DialogTitle>
                                </LinkScroll>
                                <hr className="bg-primaria w-full my-3" />
                                <LinkScroll to="contato" className="hover:underline">
                                    <DialogTitle>Contato</DialogTitle>
                                </LinkScroll>
                                <hr className="bg-primaria w-full my-3" />
                                <LinkScroll to={routes.servicos} className="hover:underline">
                                    <DialogTitle>Serviços</DialogTitle>
                                </LinkScroll>
                                <hr className="bg-primaria w-full my-3" />
                            </>
                        ) : (
                            <>
                                {instituicao && (
                                    <>
                                        <hr className="bg-primaria w-full mb-3" />
                                        <Link to={routes.servicos} className="hover:underline">
                                            <DialogTitle>Serviços</DialogTitle>
                                        </Link>
                                        <hr className="bg-primaria w-full my-3" />
                                        <Link to={routes.cadastrarServico} className="hover:underline">
                                            <DialogTitle>Cadastrar Serviços</DialogTitle>
                                        </Link>
                                        <hr className="bg-primaria w-full my-3" />
                                    </>
                                )}

                                {admin ? (
                                    <>
                                        <hr className="bg-primaria w-full mb-3" />
                                        <Link to={routes.categorias} className="hover:underline">
                                            <DialogTitle>Categorias</DialogTitle>
                                        </Link>
                                        <hr className="bg-primaria w-full my-3" />
                                        <Link to={routes.cadastrarCategoria} className="hover:underline">
                                            <DialogTitle>Cadastrar Categoria</DialogTitle>
                                        </Link>
                                        <hr className="bg-primaria w-full my-3" />
                                    </>
                                ) : (
                                    <>
                                        <Link to="" className="hover:underline">
                                            <DialogTitle>Perfil</DialogTitle>
                                        </Link>
                                        <hr className="bg-primaria w-full my-3" />
                                    </>
                                )}
                            </>
                        )}
                        <Link
                            to={usuario?.token ? routes.homepage : routes.login}
                            className="hover:underline"
                            onClick={usuario?.token ? logout : undefined}
                        >
                            <DialogTitle> {usuario?.token === '' ? 'Entrar' : 'Sair'}</DialogTitle>
                            <hr className="bg-primaria w-full mb-4 mt-2" />
                        </Link>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
