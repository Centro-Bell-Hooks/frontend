import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Usuario from '../../models/Usuario'
import { auth } from '../../services'
import { RotatingLines } from 'react-loader-spinner'
import { routes } from '../../routes'
import { Alert } from '../../components'

const valoresInicias = { id: 0, nome: '', usuario: '', senha: '', foto: '' }

export function Cadastro() {
    const navigate = useNavigate()
    const [confirmaSenha, setConfirmaSenha] = useState<string>('')
    const [usuario, setUsuario] = useState<Usuario>(valoresInicias)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const voltar = useCallback(() => {
        navigate(routes.login)
    }, [navigate])

    // ver se vai dar problema
    useEffect(() => {
        if (usuario.id !== 0) {
            voltar()
        }
    }, [usuario, voltar])

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)
            try {
                await auth(`/usuarios/cadastrar`, usuario, setUsuario)

                Alert({ mensagem: 'Usuário cadastrado com sucesso!' })
                setTimeout(() => navigate(routes.login), 3000)
            } catch (err: any) {
                console.error(err)
                Alert({ mensagem: 'Erro ao cadastrar o Usuário.', tipo: 'error' })
            }
        } else {
            Alert({ mensagem: 'Dados inconsistentes. Verifique as informações de cadastro.', tipo: 'error' })
            setUsuario({ ...usuario, senha: '' })
            setConfirmaSenha('')
        }
    }

    return (
        <div className="h-screen place-items-center font-bold">
            {isLoading ? (
                <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
            ) : (
                <form className="flex justify-center items-center flex-col w-2/3 gap-3" onSubmit={cadastrarNovoUsuario}>
                    <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="text"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2" onClick={voltar}>
                            Cancelar
                        </button>
                        <button
                            className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2"
                            type="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
