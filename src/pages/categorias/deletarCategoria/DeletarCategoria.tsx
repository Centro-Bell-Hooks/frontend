import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../../contexts'
import { Categoria } from '../../../models'
import { buscar, deletar } from '../../../services'
import { routes } from '../../../routes'
import { Alert } from '../../../components'

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
        <div className="container w-1/3 mx-auto">
            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">Categoria</header>
                <p className="p-8 text-3xl bg-slate-200 h-full">Cargo: {categoria.cargo}</p>
                <div className="flex">
                    <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                        onClick={deletarCategoria}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}