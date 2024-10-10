import { createContext, FC, ReactNode, useState } from 'react'

import { Alert } from '../components'
import { Servico } from '../models'

interface FilterContextProps {
    titulo: string
    nome: string
    cargo: string
    cursoFiltrado: Servico[]
    setTitulo: (titulo: string) => void
    setNome: (nome: string) => void
    setCargo: (cargo: string) => void
}

export const FilterContext = createContext({} as FilterContextProps)

export const FilterProvider: FC<{ children: ReactNode; cursos: Servico[] }> = ({ children, cursos }) => {
    const [titulo, setTitulo] = useState('')
    const [nome, setNome] = useState('Todos')
    const [cargo, setCargo] = useState<string>('Todos')

    const cursoFiltrado = cursos?.filter((curso) => {
        const filtroTitulo = curso?.titulo?.toLowerCase().includes(titulo.toLocaleLowerCase())
        const filtroNome = nome !== 'Todos' ? curso?.nome.toLowerCase() === nome.toLowerCase() : true
        const filtroCargo = cargo !== 'Todos' ? curso?.categoria.cargo.toLowerCase() === cargo.toLowerCase() : true

        return filtroTitulo && filtroNome && filtroCargo
    })

    return (
        <FilterContext.Provider value={{ titulo, nome, cargo, cursoFiltrado, setTitulo, setNome, setCargo }}>
            {children}
        </FilterContext.Provider>
    )
}
