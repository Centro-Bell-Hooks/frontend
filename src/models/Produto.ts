import { Categoria } from './Categoria'

export interface Produto {
    id: number
    titulo: string
    nome: string
    descricao: string
    contador: number
    quantidade: number
    data: number
    status: boolean
    categoria: Categoria | null
}
