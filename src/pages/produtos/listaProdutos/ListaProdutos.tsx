import { useContext, useEffect, useState } from 'react'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Produto } from '../../../models'
import { buscar } from '../../../services'
import { CardProduto } from '../cardProduto'
import { routes } from '../../../routes'

export function ListaProduto() {
    const navigate = useNavigate()
    const [produto, setProduto] = useState<Produto[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        buscarProduto()

        if (token === '') {
            alert('Você precisa estar logado!')
            navigate(routes.login)
        }
    }, [token]) // ver se vai dar problema sem produto.length

    async function buscarProduto() {
        try {
            await buscar(`/produtos`, setProduto, {
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
            {produto.length === 0 && (
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
                        {produto.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
