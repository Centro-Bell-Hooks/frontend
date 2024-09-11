import { ChangeEventHandler } from 'react'

type SelectProps = {
    values: any
    name?: string
<<<<<<< Updated upstream
    onChange?: any // depois ver a tipagem
    defaultValue?: any
=======
    onChange?: ChangeEventHandler<HTMLSelectElement>
    defaultValue?: string
>>>>>>> Stashed changes
    className?: string
}

export function Select({ values = [], onChange, name, defaultValue = '', className }: SelectProps) {
    return (
<<<<<<< Updated upstream
        // mudar depois o text-link para a nova variante do tailwind que vou definir
        <select name={name} onChange={onChange} className={`p-2 text-link border rounded text-sm ${className}`}>
=======
        <select name={name} onChange={onChange} className={`p-2 border rounded text-sm ${className}`}>
>>>>>>> Stashed changes
            <option value={defaultValue} hidden>
                {defaultValue}
            </option>
            {values}
        </select>
    )
}
