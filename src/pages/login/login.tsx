import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { UsuarioLogin } from '../../models'
import { AuthContext } from '../../contexts'
import { Input } from '../../components'
import { RotatingLines } from 'react-loader-spinner'

// const valoresIniciais = {
//     id: 0,
//     nome: '',
//     usuario: '',
//     senha: '',
//     foto: '',
//     token: '',
// }

export function Login() {
    const navigate = useNavigate()
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token !== '') {
            navigate('/')
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
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={login} className="flex justify-center items-center flex-col w-1/4">
                <h2 className="text-slate-900 text-3xl font-semibold mb-3">Entrar</h2>
                <div className="flex flex-col w-full">
                    <Input
                        name="usuario"
                        placeholder="Digite seu Email"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <Input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <p className="mb-4">
                    Ainda não tem uma conta?{' '}
                    <Link to="/cadastro" className="text-sky-900 hover:underline">
                        Cadastre-se
                    </Link>
                </p>

                <button
                    type="submit"
                    className="rounded bg-primaria hover:bg-fuchsia-800 text-white w-full py-2 flex justify-center"
                >
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
