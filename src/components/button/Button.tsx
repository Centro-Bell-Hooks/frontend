import { MouseEventHandler, ReactNode } from 'react'

type SizeProps = 'sm' | 'md' | 'lg'

type ButtonProps = {
    size?: SizeProps
    children: ReactNode
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    background?: 'padrao' | 'sem_fundo'
    fullWidth?: boolean
    className?: string
}

const tipoDoTamanho: Record<SizeProps, string> = {
    sm: 'py-1 px-3',
    md: 'py-2 px-4',
    lg: 'py-3 px-4',
}

export function Button({
    size = 'md',
    type = 'button',
    disabled = false,
    background = 'padrao',
    fullWidth = false,
    children,
    onClick,
    className,
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                rounded
                cursor-pointer
                ${tipoDoTamanho[size]} 
                ${background === 'padrao' ? 'bg-primaria hover:bg-fuchsia-700 text-white' : 'border border-solid border-primaria text-primaria'} 
                ${fullWidth && 'w-full'}
                ${className}
                `}
        >
            {children}
        </button>
    )
}
