import { useContext } from 'react'

import { Input, Select } from '../../../../components'
import { FilterContext } from '../../../../contexts'

export function FiltroServico() {
    const { titulo, nome, cargo, setTitulo, setNome, setCargo } = useContext(FilterContext)
    const instituicoes = ['Todos', 'Facebook', 'Apple', 'Microsoft']
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
    // async function buscarCategorias() {
    //     try {
    //         await buscar('/categorias', setCategorias, {
    //             headers: { Authorization: token },
    //         })
    //     } catch (error: any) {
    //         if (error.toString().includes('401')) {
    //             handleLogout()
    //         }
    //     }
    // }

    return (
        <div>
            <div className="grid grid-cols-[4fr_1fr_1fr] mb-8 gap-3 justify-between">
                <Input
                    className="w-full max-w-[500px] border border-primaria"
                    name="buscar"
                    placeholder="Pesquise cursos"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <Select
                    className="w-full max-w-[200px] border border-primaria"
                    name="nome"
                    defaultValue="Todos"
                    onChange={(e) => setNome(e.target.value)}
                    values={instituicoes.map((value: any) => (
                        <option key={value.id} value={value}>
                            {value}
                        </option>
                    ))}
                />
                <Select
                    className="w-full max-w-[200px] border border-primaria"
                    name="cargo"
                    defaultValue="Todos"
                    onChange={(e) => setCargo(e.target.value)}
                    values={cargos.map((value: any) => (
                        <option key={value.id} value={value}>
                            {value}
                        </option>
                    ))}
                />
            </div>
        </div>
    )
}
