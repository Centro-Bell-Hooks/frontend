import { useContext } from 'react'

import { FilterContext } from '../../../contexts'
import { CardServico } from '../cardServico'

export function ListaServicos() {
    const { cursoFiltrado } = useContext(FilterContext)

    return (
        <div>
            <div className="grid grid-cols-2 w-full gap-7">
                {cursoFiltrado.length === 0 ? (
                    <p>Nenhum serviço encontrado.</p>
                ) : (
                    cursoFiltrado.map((servico) => <CardServico key={servico.id} servico={servico} />)
                )}
            </div>
        </div>
    )
}
