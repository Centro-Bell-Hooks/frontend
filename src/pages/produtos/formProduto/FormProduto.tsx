import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { Categoria, Produto } from '../../../models'
import { AuthContext } from '../../../contexts'
import { atualizar, buscar, cadastrar } from '../../../services'
import { Alert } from '../../../components/alert'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { routes } from '../../../routes'

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

export function FormProduto() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: 'curso', cargo: '' })
    const [produtos, setProdutos] = useState<Produto>(valoresIniciais)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        buscarCategorias()
        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado', tipo: 'info' })
            navigate(routes.login)
        }

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
        // corrir talvez
        setProdutos({
            ...produtos,
            categoria: categoria,
        })
    }, [token, id, categoria])

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProdutos, {
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
        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        })
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produtos, setProdutos, {
                    headers: {
                        Authorization: token,
                    },
                })

                Alert({ mensagem: 'Produto atualizada com sucesso' })
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    Alert({ mensagem: 'Erro ao atualizar a Produto', tipo: 'error' })
                }
            }
        } else {
            try {
                await cadastrar(`/produtos`, produtos, setProdutos, {
                    headers: {
                        Authorization: token,
                    },
                })

                Alert({ mensagem: 'Produto cadastrada com sucesso' })
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    Alert({ mensagem: 'Erro ao cadastrar a Produto', tipo: 'error' })
                }
            }
        }

        setIsLoading(false)
        navigate(routes.produtos)
    }

    return (
        <div className="flex flex-col items-center mx-auto container">
            <h1 className="my-8 text-4xl text-center">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

            <form className="flex flex-col gap-4 w-1/2" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <Input
                        name="titulo"
                        placeholder="Titulo do curso"
                        value={produtos.titulo}
                        onChange={atualizarEstado}
                    />
                    <Input
                        name="nome"
                        placeholder="Nome da instituição"
                        value={produtos.nome}
                        onChange={atualizarEstado}
                    />
                    <Input
                        name="descricao"
                        placeholder="Descrição"
                        value={produtos.descricao}
                        onChange={atualizarEstado}
                    />

                    <p>Categoria</p>

                    <select
                        name="tema"
                        className="border-slate-800 p-2 border rounded"
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>
                            Selecione uma Categoria
                        </option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id}>{categoria.cargo}</option>
                            </>
                        ))}
                    </select>
                </div>
                <Button type="submit" disabled={categoria.cargo === ''}>
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
        </div>
    )
}
