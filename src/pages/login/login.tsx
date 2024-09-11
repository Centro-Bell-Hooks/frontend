import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'

import { UsuarioLogin } from '../../models'
import { AuthContext, valoresIniciais } from '../../contexts'
import { routes } from '../../routes'
import { Input, Button } from '../../components'

export function Login() {
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(valoresIniciais)
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (usuario.id && usuario.tipo !== 'admin') {
            navigate(routes.servicos)
        } else if (usuario.id) {
            navigate(routes.categorias)
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="hidden md:flex bg-primaria  justify-center items-center p-4">
                <Link to={routes.homepage}>
                    <img src="/assets/logo-bell-hooks.jpg" className="rounded-full max-w-[200px] md:max-w-[300px]" />
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="text-2xl md:text-3xl mb-3 font-semibold text-primaria">Login</h1>
                <form onSubmit={login} className="flex flex-col gap-3 w-full max-w-[300px] md:max-w-[350px]">
                    <Input
                        name="usuario"
                        placeholder="Digite seu Email"
                        value={usuarioLogin.usuario}
                        onChange={atualizarEstado}
                    />
                    <Input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        value={usuarioLogin.senha}
                        onChange={atualizarEstado}
                        autoComplete="current-password"
                    />
                    <p className="my-1 text-center text-sm md:text-base">
                        Ainda não tem uma conta?
                        <Link to={routes.cadastro} className="text-secundaria hover:underline">
                            {' '}
                            Cadastre-se
                        </Link>
                    </p>
                    <Button type="submit">
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <>Entrar</>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    )
}
