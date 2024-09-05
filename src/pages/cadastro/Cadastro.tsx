import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Usuario from '../../models/Usuario'
import { auth } from '../../services'
import { RotatingLines } from 'react-loader-spinner'
import { routes } from '../../routes'
import { Alert, Button, Input } from '../../components'

const valoresInicias = { id: 0, nome: '', usuario: '', senha: '', foto: '' }

// tarefa extra fazer o cadastro como step depois

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
        <div className="h-screen flex justify-center items-center">
            {isLoading ? (
                <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
            ) : (
                <form className="flex justify-center items-center flex-col w-1/4" onSubmit={cadastrarNovoUsuario}>
                    <h2 className="text-slate-900 text-3xl mb-3 font-semibold">Cadastrar</h2>
                    <div className="flex flex-col w-full mb-4">
                        <Input name="nome" placeholder="Nome" value={usuario.nome} onChange={atualizarInput} />
                        <Input name="usuario" placeholder="Usuario" value={usuario.usuario} onChange={atualizarInput} />
                        <Input name="foto" placeholder="Foto" value={usuario.foto} onChange={atualizarInput} />
                        <Input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={usuario.senha}
                            onChange={atualizarInput}
                            autocomplete="current-password"
                        />
                        <Input
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            value={confirmaSenha}
                            onChange={atualizarConfirmarSenha}
                        />
                    </div>
                    <Button fullWidth={true} background="sem_fundo" onClick={voltar} className="mb-3">
                        Voltar
                    </Button>

                    <Button fullWidth={true} type="submit">
                        Cadastrar
                    </Button>
                </form>
            )}
        </div>
    )
}
