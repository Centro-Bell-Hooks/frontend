import Produto from './Produto'

export default interface Categoria {
    id: number
    tipo: string
    cargo: string
    produto?: Produto | null
}
