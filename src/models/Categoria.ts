import { Produto } from './Produto'

export interface Categoria {
    id: number
    tipo: string
    cargo: string
    produto?: Produto | null
}
