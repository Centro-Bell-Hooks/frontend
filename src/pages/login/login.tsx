import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import { UsuarioLogin } from '../../models'
import { AuthContext } from '../../contexts'
import { routes } from '../../routes'
import { Input, Button, Card, CardTitle, CardContent } from '../../components'

// const valoresIniciais = {
//     id: 0,
//     nome: '',
//     usuario: '',
//     senha: '',
//     foto: '',
//     token: '',
// }

export function Login() {
    // aqui da erro de uncontroled
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
    const { handleLogin, isLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
        // setTimeout(() => navigate(routes.servicos), 5000)
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Card>
                <CardTitle className="text-light text-3xl font-semibold mb-5">Login</CardTitle>
                <CardContent>
                    <form onSubmit={login} className="rounded-md flex justify-center items-center flex-col">
                        <div className="flex flex-col w-full">
                            <Input
                                name="usuario"
                                placeholder="Digite seu Email"
                                value={usuarioLogin.usuario}
                                onChange={atualizarEstado}
                                className="border-2"
                            />
                            <Input
                                type="password"
                                name="senha"
                                placeholder="Digite sua senha"
                                value={usuarioLogin.senha}
                                onChange={atualizarEstado}
                                autoComplete="current-password"
                                className="border-2"
                            />
                        </div>

                        <p className="mb-4 text-light">
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
                                <span>Entrar</span>
                            )}
                        </Button>

                        {/* <button
                    type="submit"
                    className="rounded text-light text-lg bg-secundaria hover:bg-[#f7db77] font-semibold w-full py-2 flex justify-center"
                >
                    Entrar
                </button> */}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
