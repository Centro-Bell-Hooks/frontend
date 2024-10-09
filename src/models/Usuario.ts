import { Servico } from './Servico'

export interface Usuario {
    id: number
    nome: string
    usuario: string
    senha: string
    confirmarSenha?: string
    foto?: string
    tipo: string
    postagem?: Servico | null // trocar postagem para servico depois
}
