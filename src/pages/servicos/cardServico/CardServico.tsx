import { Link } from 'react-router-dom'

import { Servico } from '../../../models'
import { formatarData } from '../../../utils'
import { Button, Card, CardTitle, CardContent } from '../../../components'

interface CardServicoProps {
    servico: Servico
}

export function CardServico({ servico }: CardServicoProps) {
    const data = formatarData(servico.data)

    return (
        <Card>
            <CardContent>
                <CardTitle className="text-xl my-4 font-semibold">{servico.titulo}</CardTitle>

                <div className="flex flex-col gap-1 mb-4">
                    <p>
                        <strong className="font-semibold">Empresa: </strong> {servico.nome}
                    </p>
                    <p>
                        <strong className="font-semibold">Descrição: </strong> {servico.descricao}
                    </p>
                    <p>
                        <strong className="font-semibold">Categoria: </strong> {servico.categoria?.cargo}
                    </p>
                    <p>
                        <strong className="font-semibold">Data: </strong> {data}
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link to={`/editar-servico/${servico.id}`} className="w-full">
                        <Button className="w-full" variant="outline">
                            Editar
                        </Button>
                    </Link>
                    <Link to={`/deletar-servico/${servico.id}`} className="w-full">
                        <Button className="w-full" variant="outline">
                            Deletar
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
