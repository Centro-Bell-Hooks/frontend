import { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    className?: string
}

export function Card({ children, className }: CardProps) {
    return <div className={`bg-slate-100 rounded-md px-2 py-3 ${className}`}>{children}</div>
}
