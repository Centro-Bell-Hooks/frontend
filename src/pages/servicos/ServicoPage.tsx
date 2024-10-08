import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import { Alert, Box } from '../../components'
import { AuthContext, FilterProvider } from '../../contexts'
import { FiltroServico, ListaServicos } from './listaServicos'
import { Servico } from '../../models'
import { routes } from '../../routes'
import { buscar } from '../../services'

export const ServicosPage = () => {
    const navigate = useNavigate()
    const [servicos, setServicos] = useState<Servico[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const token = usuario.token

    useEffect(() => {
        buscarServico()

        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado!', tipo: 'info' })
            navigate(routes.login)
        }
    }, [token]) // ver se vai dar problema sem servico.length

    async function buscarServico() {
        try {
            setIsLoading(true)
            await buscar(`/produtos`, setServicos, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

    console.log('SERVIÇOS', servicos)

    return (
        <div className="pt-[130px]">
            <FilterProvider cursos={servicos}>
                <Box>
                    {isLoading ? (
                        <div className="h-screen flex justify-center items-center">
                            <RotatingLines
                                strokeColor="black"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="50"
                                visible={true}
                            />
                        </div>
                    ) : servicos.length === 0 ? (
                        <h1 className="h-screen flex justify-center items-center text-primaria text-xl font-semibold">
                            Lista vazia
                        </h1>
                    ) : (
                        <>
                            <FiltroServico />
                            <ListaServicos />
                        </>
                    )}
                </Box>
            </FilterProvider>
        </div>
    )
}
