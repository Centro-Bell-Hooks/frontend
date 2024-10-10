import { useContext, useEffect, useState } from 'react'

// ver se vai dá erro no deploy
import { Input, Select } from '@/components'
import { AuthContext, FilterContext } from '@/contexts'
import { buscar } from '@/services'
import { Categoria } from '@/models'

export function FiltroServico() {
    const { titulo, nome, cargo, setTitulo, setNome, setCargo } = useContext(FilterContext)
    const instituicoes = ['Todos', 'Facebook', 'Apple', 'Microsoft']
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        buscarCategorias()
    }, [])

    const cargos = [
        'Todos',
        'Desenvolvedora FullStack',
        'Design UX',
        'Desenvolvedora Frontend',
        'Design Gráfico',
        'Inteligência Artificial',
        'Eletrônica',
        'Desenvolvedora Backend',
        'Psicologia',
        'Power BI',
    ]

    // FormServico
    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    console.log(categorias)

    return (
        <div>
            <div className="grid grid-cols-1 max-[800px]:grid-cols-2 md:grid-cols-[4fr_1fr_1fr] mb-8 gap-4 justify-between">
                <div className="relative w-full max-[850px]:col-span-2">
                    <Input
                        className="w-full md:max-w-[500px] border border-primaria"
                        name="buscar"
                        placeholder="Pesquise cursos"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <Select
                    className="w-full max-w-[150px] md:max-w-[200px] border border-primaria"
                    name="nome"
                    defaultValue="Instituição"
                    onChange={(e) => setNome(e.target.value)}
                    values={categorias.flatMap(
                        (categoria: any) =>
                            categoria?.produto &&
                            categoria.produto.map((prod: any, idx: number) => (
                                <option key={`${categoria.id}-${idx}`} value={prod.nome}>
                                    {prod.nome}
                                </option>
                            ))
                    )}
                />
                <Select
                    className="w-full max-w-[150px] md:max-w-[200px] border border-primaria justify-self-end"
                    name="cargo"
                    defaultValue="Cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    value="Todos"
                    values={categorias.map((value: any) => (
                        <option key={value.id} value={value.cargo}>
                            {value.cargo}
                        </option>
                    ))}
                />
            </div>
        </div>
    )
}
