import { Servico } from './Servico'

export interface Usuario {
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    postagem?: Servico | null // trocar postagem para servico depois
}
