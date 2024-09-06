import { useContext, useEffect, useState } from 'react'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'

import { Categoria } from '../../../models'
import { buscar } from '../../../services/Service'
import { CardCategoria } from '../cardcategoria'

export function ListaCategoria() {
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar(`/categorias`, setCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categoria.length])

    return (
        <>
            {}
            {categoria.length === 0 && (
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
                        {}
                        {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
