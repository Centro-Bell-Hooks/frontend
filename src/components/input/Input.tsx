import { ChangeEventHandler } from 'react'

type SizeProps = 'sm' | 'md' | 'lg'

type InputProps = {
    size?: SizeProps
    type?: 'text' | 'email' | 'password' | 'date' | 'number'
    value?: string
    name: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    fullWidth?: boolean
    margin?: boolean
    errorMessage?: any
    className?: string
}

const tipoDoTamanho: Record<SizeProps, string> = {
    sm: 'py-1 px-3',
    md: 'py-2 px-4',
    lg: 'py-3 px-4',
}

const estiloBase = `border-2 border-slate-700 rounded`

export function Input({
    size = 'md',
    type = 'text',
    value = '',
    fullWidth = false,
    margin = true,
    className = '',
    errorMessage = '',
    name,
    onChange,
    placeholder,
}: InputProps) {
    return (
        <>
            <input
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={`${estiloBase} ${tipoDoTamanho[size]} ${margin && 'my-2'} ${fullWidth && 'w-full'} ${className}`}
            />
            <p>{errorMessage}</p>
        </>
    )
}
