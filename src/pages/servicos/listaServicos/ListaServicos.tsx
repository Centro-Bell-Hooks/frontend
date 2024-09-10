import { useContext, useEffect, useState } from 'react'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Servico } from '../../../models'
import { buscar } from '../../../services'
import { CardServico } from '../cardServico'
import { routes } from '../../../routes'
import { Box } from '../../../components'

export function ListaServicos() {
    const navigate = useNavigate()
    const [servicos, setServicos] = useState<Servico[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        buscarServico()

        if (token === '') {
            alert('Você precisa estar logado!')
            navigate(routes.login)
        }
    }, [token]) // ver se vai dar problema sem servico.length

    async function buscarServico() {
        try {
            await buscar(`/produtos`, setServicos, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    return (
        <>
            {servicos.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="h-screen">
                <Box>
                    <div className="flex flex-col w-full gap-6">
                        {servicos.map((servico) => (
                            <CardServico key={servico.id} servico={servico} />
                        ))}
                    </div>
                </Box>
            </div>
        </>
    )
}
