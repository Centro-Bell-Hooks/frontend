import Produto from './Produto'

export default interface Categoria {
    descricao: string | number | readonly string[] | undefined
    id: number
    tipo: string
    cargo: string
    produto?: Produto | null
}
