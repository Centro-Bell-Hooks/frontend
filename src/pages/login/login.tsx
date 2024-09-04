import { Link, useNavigate } from 'react-router-dom'
import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { UsuarioLogin } from '../../models'
import { AuthContext } from '../../contexts'
import { Input } from '../../components'

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
    const { usuario, handleLogin } = useContext(AuthContext)

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

    // TESTAR - se os componentes estão funcionando
    return (
        <>
            <form onSubmit={login} className="flex justify-center items-center flex-col w-1/2">
                <h2 className="text-slate-900 text-5xl">Entrar</h2>
                <div className="flex flex-col w-full">
                    <Input
                        name="usuario"
                        placeholder="Digite seu Email"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <Input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                {/*  <button
                    type="submit"
                    className="rounded bg-fuchsia-700 hover:bg-fuchsia-800 text-white w-1/2 py-2 flex justify-center"
                >
                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                      /> : 
                    <span>Entrar</span>
                    {/* } 
                </button>*/}

                <hr className="border-slate-800 w-full" />

                <p>
                    Ainda não tem uma conta?{' '}
                    <Link to="/cadastro" className="text-sky-900 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </form>
            <div className="hidden lg:block"></div>
        </>
    )
}
