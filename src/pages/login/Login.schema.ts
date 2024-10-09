import { z } from 'zod'

export const schemaValidacao = z.object({
    usuario: z
        .string()
        .email('Preencha o campo de email corretamente')
        .refine((value) => value.length > 0, 'Campo obrigatório'),
    senha: z
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .max(30, 'Máximo de 30 caracteres')
        .refine((value) => value.length > 0, 'Campo obrigatório'),
})
