import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Categoria } from '../../../models'
import { buscar, deletar } from '../../../services'
import { routes } from '../../../routes'
import { Alert, Button, Card, CardContent, CardTitle } from '../../../components'

export function DeletarCategoria() {
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const retornar = () => navigate(routes.categorias)

    // troquei o useEffect
    useEffect(() => {
        if (id !== undefined) buscarPorId(id)

        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado.', tipo: 'info' })
            navigate(routes.login)
        }
    }, [token, id])

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                Alert({ mensagem: 'O token expirou, favor logar novamente.', tipo: 'info' })
                handleLogout()
            }
        }
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    Authorization: token,
                },
            })

            Alert({ mensagem: 'Categoria apagada com sucesso!' })
        } catch (error) {
            console.error(error)
            Alert({ mensagem: 'Erro ao apagar a Categoria, consulte o administrador.', tipo: 'error' })
        }
        retornar()
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-full max-w-[350px]">
                <CardContent>
                    <CardTitle className="text-xl my-4 font-semibold text-center">Você deseja mesmo apagar?</CardTitle>

                    <p>
                        <strong className="font-semibold">Cargo:</strong> {categoria.cargo}
                    </p>

                    <div className="flex gap-4 mt-5">
                        <Button variant="outline" className="w-full py-2" onClick={retornar}>
                            Não
                        </Button>
                        <Button className="w-full flex items-center justify-center" onClick={deletarCategoria}>
                            Sim
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
