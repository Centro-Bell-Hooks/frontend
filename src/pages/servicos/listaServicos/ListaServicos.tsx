import { useContext, useEffect, useState } from 'react'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Servico } from '../../../models'
import { buscar } from '../../../services'
import { CardServico } from '../cardServico'
import { routes } from '../../../routes'

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

            <div className="flex justify-center my-4 w-full">
                <div className="flex flex-col container">
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {servicos.map((servico) => (
                            <CardServico key={servico.id} servico={servico} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
