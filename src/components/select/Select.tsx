import { ChangeEvent } from 'react'

type SelectProps = {
    values: any
    name?: string
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void // depois ver a tipagem
    defaultValue?: any
    className?: string
    value?: string
}

export function Select({ values = [], value = '', onChange, name, defaultValue = '', className }: SelectProps) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={`p-2 border border-primaria rounded text-sm ${className}`}
        >
            <option value={defaultValue} hidden>
                {defaultValue}
            </option>
            {values}
        </select>
    )
}
