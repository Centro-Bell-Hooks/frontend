import { useContext, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Categoria } from '../../../models'
import { buscar } from '../../../services'
import { CardCategoria } from '../cardCategoria'
import { routes } from '../../../routes'
import { Alert, Box } from '../../../components'

export function ListaCategoria() {
    const navigate = useNavigate()
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const token = usuario.token

    useEffect(() => {
        buscarCategorias()
        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado', tipo: 'info' })
            navigate(routes.login)
        }
    }, [token])

    async function buscarCategorias() {
        try {
            setIsLoading(true)
            // adicionar o contador no enpoint de categorias
            await buscar(`/categorias`, setCategorias, {
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

    return (
        <div className="pt-[130px]">
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
                ) : categorias.length === 0 ? (
                    <h1 className="h-screen flex justify-center items-center text-primaria text-xl font-semibold">
                        Lista vazia
                    </h1>
                ) : (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                )}
            </Box>
        </div>
    )
}
