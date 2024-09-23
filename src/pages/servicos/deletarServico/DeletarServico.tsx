import { useState, useContext, useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { buscar, deletar } from '../../../services'
import { Servico } from '../../../models'
import { Alert } from '../../../components/alert'
import { routes } from '../../../routes'
import { Button, Card, CardContent, CardTitle } from '../../../components'

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
        <div className="flex items-center justify-center min-h-screen p-4 sm:p-8">
            <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg">
                <CardContent>
                    <CardTitle className="text-xl my-4 font-semibold text-center">Você deseja mesmo apagar?</CardTitle>

                    <div className="flex flex-col gap-2 mb-5">
                        <p>
                            <strong className="font-semibold">Título: </strong> {servico.titulo}
                        </p>
                        <p>
                            <strong className="font-semibold">Empresa: </strong> {servico.nome}
                        </p>
                        <hr className="border-1 border-primaria my-4" />
                        <p>
                            <strong className="font-semibold">Descrição: </strong> {servico.descricao}
                        </p>

                        <p>
                            <strong className="font-semibold">Categoria: </strong> {servico.categoria?.cargo}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" onClick={retornar} className="w-full sm:w-auto">
                            Não
                        </Button>
                        <Button onClick={deletarServico} className="w-full sm:w-auto">
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <>Sim</>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
