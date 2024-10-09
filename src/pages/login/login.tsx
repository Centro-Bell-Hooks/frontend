import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'

import { UsuarioLogin } from '../../models'
import { AuthContext, valoresIniciais } from '../../contexts'
import { routes } from '../../routes'
import { Input, Button } from '../../components'
import { schemaValidacao } from './Login.schema'

export function Login() {
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(valoresIniciais)
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const [erros, setErros] = useState<any>({ usuario: '', senha: '' })
    const [senhaVisivel, setSenhaVisivel] = useState(false)
    console.log('Erros', erros)

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
        const res = schemaValidacao.safeParse(usuarioLogin)

        if (!res.success) {
            res.error.issues.map((issue) => {
                console.log('ISSUE', issue)
                setErros((prevErros) => ({ ...prevErros, [issue.path[0]]: issue.message }))
            })
        } else {
            setErros({ usuario: '', senha: '' })
            handleLogin(usuarioLogin)
        }
    }

    function visualizarSenha() {
        setSenhaVisivel((prev) => !prev)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="hidden md:flex bg-primaria  justify-center items-center p-4">
                <Link to={routes.homepage}>
                    <img src="/assets/logo-bell-hooks.jpg" className="rounded-full max-w-[200px] md:max-w-[300px]" />
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl mb-6 font-semibold text-primaria">Login</h1>
                <form onSubmit={login} className="flex flex-col gap-3 w-full max-w-[300px] md:max-w-[350px]">
                    <Input
                        name="usuario"
                        placeholder="Digite seu Email"
                        value={usuarioLogin.usuario}
                        onChange={atualizarEstado}
                        className=""
                    />
                    {erros.usuario && <p className="text-red-600 text-sm text-end">{erros.usuario}</p>}
                    <div className="relative">
                        <Input
                            type={senhaVisivel ? 'text' : 'password'}
                            name="senha"
                            placeholder="Digite sua senha"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                            autoComplete="current-password"
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                            onClick={visualizarSenha}
                        >
                            <img
                                src={senhaVisivel ? '/assets/icone-senha1.png' : '/assets/icone-senha2.png'}
                                alt={senhaVisivel ? 'Esconder senha' : 'Mostrar senha'}
                                className="h-5 w-5"
                            />
                        </span>
                    </div>

                    {erros.senha && <p className="text-red-600 text-sm text-end">{erros.senha}</p>}

                    <Button type="submit" className="mt-5">
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
                    <p className="mt-1 text-center text-sm md:text-base">
                        Ainda não tem uma conta?
                        <Link to={routes.cadastro} className="text-secundaria hover:underline">
                            {' '}
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
