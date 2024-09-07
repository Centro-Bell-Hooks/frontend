import { useState, useContext, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { buscar, deletar } from '../../../services'
import { Servico } from '../../../models'
import { Alert } from '../../../components/alert'
import { routes } from '../../../routes'

export function DeletarServico() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [servico, setServico] = useState<Servico>({} as Servico)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const retornar = () => navigate(routes.servicos)

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
            await buscar(`/produtos/${id}`, setServico, {
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

    async function deletarServico() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            Alert({ mensagem: 'Serviço deletado com sucesso.', tipo: 'success' })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                Alert({ mensagem: 'Erro ao deletar serviço.', tipo: 'error' })
            }
        }
        setIsLoading(false)
        retornar()
    }

    return (
        <div className="mx-auto w-1/3 container">
            <p className="mb-4 font-semibold text-center">Você tem certeza de que deseja apagar o serviço?</p>

            <div className="flex flex-col justify-between border rounded-2xl overflow-hidden">
                <header className="bg-indigo-600 px-6 py-2 font-bold text-2xl text-white">Servico</header>
                <div className="p-4">
                    <p className="h-full text-xl">{servico.titulo}</p>
                    <p className="h-full text-xl">{servico.nome}</p>
                    <p>{servico.descricao}</p>
                </div>
                <div className="flex">
                    <button className="bg-red-400 hover:bg-red-600 py-2 w-full text-slate-100" onClick={retornar}>
                        Não
                    </button>
                    <button
                        className="flex justify-center items-center bg-indigo-400 hover:bg-indigo-600 w-full text-slate-100"
                        onClick={deletarServico}
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
