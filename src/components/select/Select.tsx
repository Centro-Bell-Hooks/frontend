import { ChangeEventHandler } from 'react'

type SelectProps = {
    values: any
    name?: string
    onChange?: ChangeEventHandler<HTMLSelectElement>
    defaultValue?: string
}

export function Select({ values = [], onChange, name, defaultValue = '' }: SelectProps) {
    return (
        <select name={name} onChange={onChange} className="p-2 border rounded text-sm">
            <option value={defaultValue} hidden>
                {defaultValue}
            </option>
            {values}
        </select>
    )
}
