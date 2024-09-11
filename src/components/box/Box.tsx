import { ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: string
}

// o xs não funciona, tem que arrumar
const estilos = `
    relative 
    box-border 
    max-w-[1440px] 
    m-auto h-full 
    px-8
    py-5
    md:px-14 
    md:py-14
`

export function Box({ children, className }: BoxProps) {
    return <div className={`${estilos} ${className}`}>{children}</div>
}
