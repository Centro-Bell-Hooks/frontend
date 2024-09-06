import { Link } from 'react-router-dom'

import { Servico } from '../../../models'
import { formatarData } from '../../../utils'
import { Button } from '../../../components'

interface CardServicoProps {
    servico: Servico
}

export function CardServico({ servico }: CardServicoProps) {
    const data = formatarData(servico.data)
    return (
        <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
            <div>
                <div className="flex text-slate-100 w-full bg-emerald-600 py-2 px-4 items-center gap-4">
                    <h3 className="text-lg font-bold text-center uppercase">{servico.titulo}</h3>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">{servico.nome}</h4>
                    <p>{servico.descricao}</p>
                    <div className="mt-4">
                        <p className="text-sm text-gray-950">Categoria: {servico.categoria?.cargo}</p>
                        <p className="text-sm text-gray-950">Data: {data}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link
                    to={`/editar-servico/${servico.id}`}
                    className="w-full text-white bg-emerald-400 hover:bg-emerald-800 flex items-center justify-center py-2"
                >
                    <button>Editar</button>
                </Link>
                <Link
                    to={`/deletar-servico/${servico.id}`}
                    className="text-white bg-emerald-400 hover:bg-emerald-800 w-full flex items-center justify-center"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}
