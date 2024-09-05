import { FC, MouseEventHandler, ReactNode } from 'react'

type SizeProps = 'sm' | 'md' | 'lg'

type ButtonProps = {
    size?: SizeProps
    children: ReactNode
    type?: 'button' | 'reset' | 'submit'
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    color?: string
    background?: string
    fullWidth?: boolean
}

// ver se precisa ajustar o tamanho depois
const tipoDoTamanho: Record<SizeProps, string> = {
    sm: 'py-1 px-3',
    md: 'py-2 px-4',
    lg: 'py-3 px-4',
}

const estiloBase = `border-bg-primaria border-solid border-2 rounded`

export const Button: FC<ButtonProps> = ({
    size = 'md',
    type = 'button',
    disabled = false,
    color = 'text-white',
    background = 'bg-primaria',
    fullWidth = false,
    children,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${estiloBase} ${tipoDoTamanho[size]} ${background} ${color} ${fullWidth && 'w-full'}`}
        >
            {children}
        </button>
    )
}
