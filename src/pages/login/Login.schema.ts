import { z } from 'zod'

export const schemaValidacao = z.object({
    usuario: z.string().min(1, 'Campo obrigatório').email({ message: 'Preencha o campo de email corretamente' }),
    senha: z.string().min(1, 'Campo obrigatório').min(8, 'Mínimo de 8 caracteres').max(30, 'Máximo de 30 caracteres'),
})
