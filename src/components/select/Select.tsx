import { ChangeEventHandler } from 'react'

type SelectProps = {
    values: any
    name?: string
    onChange?: any // depois ver a tipagem
    defaultValue?: any
    className?: string
}

export function Select({ values = [], onChange, name, defaultValue = '', className }: SelectProps) {
    return (
        // mudar depois o text-link para a nova variante do tailwind que vou definir
        <select name={name} onChange={onChange} className={`p-2 text-cinza border rounded text-sm ${className}`}>
            <option value={defaultValue} hidden>
                {defaultValue}
            </option>
            {values}
        </select>
    )
}
