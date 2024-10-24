import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { Categoria, Servico } from '../../../models'
import { AuthContext } from '../../../contexts'
import { atualizar, buscar, cadastrar } from '../../../services'
import { routes } from '../../../routes'
import { Card, CardContent, CardTitle, Button, Input, Alert, Select, Box, Textarea } from '../../../components'

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

    async function buscarCategoriaPorId(e: any) {
        const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex]
        const id = selectedOption.getAttribute('data-key')

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
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
        <Box>
            <div className="flex items-center justify-center pt-[130px] sm:h-screen">
                <Card className="w-full max-w-xs sm:max-w-md p-6">
                    <CardTitle className="mb-4 text-xl sm:text-2xl text-center">
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
                                <Textarea
                                    name="descricao"
                                    placeholder="Descrição"
                                    value={servicos.descricao}
                                    onChange={atualizarEstado}
                                />
                                <h4 className="font-semibold my-1">Categoria</h4>

                                {/* arrumar os outros values */}
                                <Select
                                    name="categoria"
                                    onChange={buscarCategoriaPorId}
                                    defaultValue={
                                        servicos.categoria?.id ? servicos.categoria?.cargo : 'Selecione uma categoria'
                                    }
                                    values={categorias.map((categoria) => (
                                        <option key={categoria.id} data-key={categoria.id} value={categoria.cargo}>
                                            {categoria.cargo}
                                        </option>
                                    ))}
                                />
                            </div>
                            <Button type="submit" className="w-full mt-3" disabled={servicos.categoria?.cargo === ''}>
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
        </Box>
    )
}
