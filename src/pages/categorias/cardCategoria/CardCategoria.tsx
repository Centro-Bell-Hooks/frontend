import { Link } from 'react-router-dom'

import { Categoria } from '../../../models'
import { Button, Card, CardContent } from '../../../components'

interface CardCategoriasProps {
    categoria: Categoria
}

export function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className="flex flex-col">
            <Card>
                <CardContent>
                    <div className="flex mt-4 mb-2 items-end">
                        <p>
                            <strong className="text-lg font-semibold">Categoria: </strong> {categoria.cargo}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Link to={`/editar-categoria/${categoria.id}`} className="w-full">
                            <Button variant="outline">Editar</Button>
                        </Link>

                        <Link to={`/deletar-categoria/${categoria.id}`} className="w-full">
                            <Button>Deletar</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
