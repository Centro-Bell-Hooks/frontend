import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { Usuario } from '../../models'
import { auth } from '../../services'
import { routes } from '../../routes'
import { Alert, Button, Input, Select } from '../../components'
import { schemaValidacao } from './Cadastro.schema'

const valoresInicias = { nome: '', tipo: '', usuario: '', senha: '', confirmarSenha: '', foto: '-' }

export function Cadastro() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState<Usuario>({ ...valoresInicias, id: 0 })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [erros, setErros] = useState(valoresInicias)

    const voltar = useCallback(() => {
        navigate(routes.login)
    }, [navigate])

    useEffect(() => {
        if (usuario.id !== 0) {
            voltar()
        }
    }, [usuario, voltar])

    function atualizarInput(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value.toLowerCase(),
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        const validacao = schemaValidacao.safeParse(usuario)

        if (!validacao.success) {
            validacao.error.issues.map((issue) => {
                setErros((prevErros) => ({ ...prevErros, [issue.path[0]]: issue.message }))
            })
        } else {
            setIsLoading(true)
            setErros(valoresInicias)
            const valoresDoUsuario = { ...usuario }
            delete valoresDoUsuario.confirmarSenha

            try {
                await auth(`/usuarios/cadastrar`, valoresDoUsuario, setUsuario)

                Alert({ mensagem: 'Usuário cadastrado com sucesso!' })
                setTimeout(() => voltar(), 3000)
            } catch (err: any) {
                console.error(err)
                Alert({
                    mensagem: 'Erro ao cadastrar o Usuário, o email já existe ou os dados são inconsistentes.',
                    tipo: 'error',
                })
            } finally {
                setIsLoading(false)
                setUsuario({ ...usuario, senha: '' })
            }
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="bg-primaria hidden md:flex justify-center items-center p-4">
                <Link to={routes.homepage}>
                    <img src="/assets/logo-bell-hooks.jpg" className="rounded-full max-w-[200px] md:max-w-[300px]" />
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="text-primaria md:text-3xl mb-3 font-semibold">Cadastrar</h1>
                <form
                    className="flex flex-col gap-3 w-full max-w-[300px] md:max-w-[350px]"
                    onSubmit={cadastrarNovoUsuario}
                >
                    <Input name="nome" placeholder="Nome" value={usuario.nome} onChange={atualizarInput} />
                    {erros.nome && <p className="text-red-600 text-sm text-end">{erros.nome}</p>}

                    <Input
                        name="usuario"
                        placeholder="Digite o email do usuário"
                        value={usuario.usuario}
                        onChange={atualizarInput}
                    />
                    {erros.usuario && <p className="text-red-600 text-sm text-end">{erros.usuario}</p>}

                    <Input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={usuario.senha}
                        onChange={atualizarInput}
                        autoComplete="current-password"
                    />
                    {erros.senha && <p className="text-red-600 text-sm text-end">{erros.senha}</p>}

                    <Input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        value={usuario.confirmarSenha}
                        onChange={atualizarInput}
                        autoComplete="current-password"
                    />
                    {erros.confirmarSenha && <p className="text-red-600 text-sm text-end">{erros.confirmarSenha}</p>}

                    <Select
                        name="tipo"
                        onChange={atualizarInput}
                        defaultValue="Selecione uma opção"
                        className="w-full"
                        values={['Candidato', 'Institucional'].map((value: string, index: number) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    />
                    {erros.tipo && <p className="text-red-600 text-sm text-end">{erros.tipo}</p>}

                    <Button onClick={voltar} className="my-1" variant="outline">
                        Voltar
                    </Button>
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
                            <>Cadastrar</>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    )
}
