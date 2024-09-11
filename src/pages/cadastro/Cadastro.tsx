import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { Usuario } from '../../models'
import { auth } from '../../services'
import { routes } from '../../routes'
import { Alert, Button, Input } from '../../components'

const valoresInicias = { id: 0, nome: '', tipo: '', usuario: '', senha: '', foto: '' }

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

    function atualizarConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarInput(e: ChangeEvent<HTMLInputElement>) {
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
                setTimeout(() => voltar(), 3000)
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
        <div className="grid grid-cols-2 h-screen">
            <div className="bg-primaria flex justify-center items-center">
                <Link to={routes.homepage}>
                    <img src="src/assets/logo-bell-hooks.jpg" className="rounded-full max-w-[300px]" />
                </Link>
            </div>

            {isLoading ? (
                <div className="flex justify-center">
                    <RotatingLines
                        strokeColor="black"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="50"
                        visible={true}
                    />
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-primaria text-3xl mb-3 font-semibold">Cadastrar</h1>
                    <form
                        className="flex flex-col justify-center items-center gap-3 w-full max-w-[350px]"
                        onSubmit={cadastrarNovoUsuario}
                    >
                        <Input name="nome" placeholder="Nome" value={usuario.nome} onChange={atualizarInput} />
                        <Input
                            name="usuario"
                            placeholder="Digite o email do usuário"
                            value={usuario.usuario}
                            onChange={atualizarInput}
                        />
                        {/* <Input name="foto" placeholder="Foto" value={usuario.foto} onChange={atualizarInput} /> */}
                        <Input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={usuario.senha}
                            onChange={atualizarInput}
                            autoComplete="current-password"
                        />
                        <Input
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            value={confirmaSenha}
                            onChange={atualizarConfirmarSenha}
                        />
                        <Button onClick={voltar} className="my-1" variant="outline">
                            Voltar
                        </Button>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                </div>
            )}
        </div>
    )
}
