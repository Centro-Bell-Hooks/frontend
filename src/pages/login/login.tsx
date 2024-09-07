import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import { UsuarioLogin } from '../../models'
import { AuthContext } from '../../contexts'
import { Input } from '../../components'
import { routes } from '../../routes'

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
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={login} className="flex justify-center items-center flex-col w-1/4">
                <h2 className="text-slate-900 text-3xl font-semibold mb-3">Entrar</h2>
                <div className="flex flex-col w-full">
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
                        autocomplete="current-password"
                    />
                </div>

                <p className="mb-4">
                    Ainda não tem uma conta?
                    <Link to={routes.cadastro} className="text-sky-900 hover:underline">
                        Cadastre-se
                    </Link>
                </p>

                <button
                    type="submit"
                    className="rounded bg-primaria hover:bg-[#f7db77] text-fonte font-semibold w-full py-2 flex justify-center"
                >
                    {/*#E6D081  #f7db77*/}
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
                </button>
            </form>
        </div>
    )
}
