import { Servico } from './Servico'

export interface Categoria {
    id: number
    tipo: string
    cargo: string
    produto?: Servico | null
}
