import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import { AuthContext } from '../../../contexts'
import { Categoria } from '../../../models'
import { atualizar, buscar, cadastrar } from '../../../services'
import { Alert, Button, Input } from '../../../components'
import { routes } from '../../../routes'

const valoresIniciais = {
    id: 0,
    tipo: 'curso',
    cargo: '',
    produto: null,
}

export function FormCategoria() {
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState<Categoria>(valoresIniciais)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const { id } = useParams<{ id: string }>()

    // deixei só um useEffect
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
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) handleLogout()
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                })

                Alert({ mensagem: 'Categoria atualizada com sucesso!' })
            } catch (error: any) {
                if (error.toString().includes('401')) handleLogout()
                else Alert({ mensagem: 'Erro ao atualizar o Categoria.', tipo: 'error' })
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                })

                Alert({ mensagem: 'Categoria cadastrada com sucesso!' })
            } catch (error: any) {
                if (error.toString().includes('401')) handleLogout()
                else Alert({ mensagem: 'Erro ao cadastrar o Categoria.', tipo: 'error' })
            }
        }

        setIsLoading(false)
        navigate(routes.categorias)
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <Input
                    name="cargo"
                    placeholder="Nova categoria"
                    className="border-2 border-slate-700 rounded p-2"
                    value={categoria.cargo}
                    onChange={atualizarEstado}
                />
                <Button type="submit">
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <>{id === undefined ? 'Cadastrar' : 'Atualizar'}</>
                    )}
                </Button>
            </form>
        </div>
    )
}
