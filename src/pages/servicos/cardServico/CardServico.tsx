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
        <div className="h-screen">
            <Card className="flex flex-col">
                <CardTitle title={servico.titulo} />
                <CardContent>
                    <div className="flex flex-col py-4">
                        <h4 className="text-lg font-semibold uppercase">{servico.nome}</h4>
                        <p className="mt-2">{servico.descricao}</p>
                        <div className="mt-4">
                            <p className="text-sm">Categoria: {servico.categoria?.cargo}</p>
                            <p className="text-sm">Data: {data}</p>
                        </div>
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
        </div>
    )
}
