import { z } from 'zod'

export const schemaValidacao = z
    .object({
        nome: z.string().min(1, 'Campo obrigatório').max(50, 'Máximo de 50 caracteres'),
        usuario: z
            .string()
            .min(1, 'Campo obrigatório')
            .email('Preencha o campo de email corretamente')
            .refine((value) => value.length > 0, 'Campo obrigatório'),
        senha: z
            .string()
            .min(8, 'Mínimo de 8 caracteres')
            .max(30, 'Máximo de 30 caracteres')
            .refine((value) => value.length > 0, 'Campo obrigatório'),
        confirmarSenha: z.string().min(1, 'Campo obrigatório'),
        tipo: z.string().min(1, 'Campo obrigatório'),
    })
    .refine((data) => data.senha === data.confirmarSenha, {
        message: 'As senhas precisam ser iguais',
        path: ['confirmarSenha'],
    })
