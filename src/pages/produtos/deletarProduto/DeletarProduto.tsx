import { useState, useContext, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { buscar, deletar } from '../../../services'
import { Produto } from '../../../models'
import { Alert } from '../../../components/alert'
import { routes } from '../../../routes'

export function DeletarProduto() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const retornar = () => navigate(routes.produtos)

    useEffect(() => {
        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado', tipo: 'info' })
            navigate(routes.login)
        }

        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [token, id])

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            Alert({ mensagem: 'Produto deletado com sucesso.', tipo: 'success' })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                Alert({ mensagem: 'Erro ao deletar produto.', tipo: 'error' })
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="mx-auto w-1/3 container">
            <p className="mb-4 font-semibold text-center">Você tem certeza de que deseja apagar o produto?</p>

            <div className="flex flex-col justify-between border rounded-2xl overflow-hidden">
                <header className="bg-indigo-600 px-6 py-2 font-bold text-2xl text-white">Produto</header>
                <div className="p-4">
                    <p className="h-full text-xl">{produto.titulo}</p>
                    <p className="h-full text-xl">{produto.nome}</p>
                    <p>{produto.descricao}</p>
                </div>
                <div className="flex">
                    <button className="bg-red-400 hover:bg-red-600 py-2 w-full text-slate-100" onClick={retornar}>
                        Não
                    </button>
                    <button
                        className="flex justify-center items-center bg-indigo-400 hover:bg-indigo-600 w-full text-slate-100"
                        onClick={deletarProduto}
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
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
