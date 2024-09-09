import { CSSProperties, ReactNode } from 'react'

type BoxProps = {
    children: ReactNode
    className?: CSSProperties
}

const estilos = `
    relative 
    box-border 
    max-w-[1440px] 
    m-auto h-full 
    xs-px-8
    xs-py-4
    md:px-10 
    md:py-8
`

export function Box({ children, className }: BoxProps) {
    return <div className={`${estilos} ${className}`}>{children}</div>
}
