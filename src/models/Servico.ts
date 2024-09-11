import { Categoria } from './Categoria'
import { Usuario } from './Usuario'

export interface Servico {
    id?: number
    titulo: string
    nome: string
    descricao?: string
    contador?: number
    quantidade?: number
    data?: Date
    status?: boolean
    categoria?: Categoria | null
    usuario?: Usuario | null
}
