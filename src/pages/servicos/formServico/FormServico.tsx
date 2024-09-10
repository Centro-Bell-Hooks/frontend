import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { Categoria, Servico } from '../../../models'
import { AuthContext } from '../../../contexts'
import { atualizar, buscar, cadastrar } from '../../../services'
import { routes } from '../../../routes'
import { Card, CardContent, CardTitle, Button, Input, Alert } from '../../../components'

const valoresIniciais = {
    id: 0,
    titulo: '',
    nome: '',
    descricao: '',
    contador: 0,
    quantidade: 0,
    data: new Date(),
    status: true,
    categoria: null,
    usuario: null,
}

export function FormServico() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: 'curso', cargo: '' })
    const [servicos, setServicos] = useState<Servico>(valoresIniciais)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado', tipo: 'info' })
            navigate(routes.login)
        } else if (id) buscarServicoPorId(id)

        if (!!categorias) buscarCategorias()
    }, [token, id])

    useEffect(() => {
        setServicos({
            ...servicos,
            categoria: categoria,
        })
    }, [categoria])

    async function buscarServicoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setServicos, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setServicos({
            ...servicos,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        })
    }

    async function gerarNovoServico(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, servicos, setServicos, {
                    headers: {
                        Authorization: token,
                    },
                })

                Alert({ mensagem: 'Serviço atualizada com sucesso' })
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    Alert({ mensagem: 'Erro ao atualizar a Serviço', tipo: 'error' })
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, servicos, setServicos, {
                    headers: {
                        Authorization: token,
                    },
                })

                Alert({ mensagem: 'Serviço cadastrada com sucesso' })
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    Alert({ mensagem: 'Erro ao cadastrar a Serviço', tipo: 'error' })
                }
            }
        }

        setIsLoading(false)
        navigate(routes.servicos)
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-full max-w-[350px]">
                <CardTitle className="my-4 text-3xl text-center">
                    {id !== undefined ? 'Editar Serviço' : 'Cadastrar Serviço'}
                </CardTitle>

                <CardContent>
                    <form onSubmit={gerarNovoServico}>
                        <div className="flex flex-col gap-3">
                            <Input
                                name="titulo"
                                placeholder="Titulo do curso"
                                value={servicos.titulo}
                                onChange={atualizarEstado}
                            />
                            <Input
                                name="nome"
                                placeholder="Nome da instituição"
                                value={servicos.nome}
                                onChange={atualizarEstado}
                            />
                            <Input
                                name="descricao"
                                placeholder="Descrição"
                                value={servicos.descricao}
                                onChange={atualizarEstado}
                            />
                            <h4 className="font-semibold my-1">Categoria</h4>

                            <select
                                name="categoria"
                                className="border-slate-800 p-2 border rounded"
                                onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                            >
                                <option value={servicos.categoria?.cargo} selected disabled>
                                    {servicos.categoria?.cargo}
                                </option>
                                {categorias.map((categoria) => (
                                    <>
                                        <option value={categoria.id}>{categoria.cargo}</option>
                                    </>
                                ))}
                            </select>
                        </div>
                        <Button type="submit" className="w-full mt-3" disabled={categoria.cargo === ''}>
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <> {id !== undefined ? 'Atualizar' : 'Cadastrar'}</>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
