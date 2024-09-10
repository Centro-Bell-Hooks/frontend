import { Link } from 'react-router-dom'

import { Categoria } from '../../../models'
import { Button, Card, CardContent, CardTitle } from '../../../components'

interface CardCategoriasProps {
    categoria: Categoria
}

export function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className="flex flex-col">
            <Card>
                <CardContent>
                    <CardTitle className="text-lg font-semibold mt-4 mb-2">Categoria</CardTitle>
                    <p className="mb-4">Cargos: {categoria.cargo}</p>

                    <div className="flex gap-4">
                        <Link to={`/editar-categoria/${categoria.id}`} className="w-full ">
                            <Button variant="outline">Editar</Button>
                        </Link>

                        <Link to={`/deletar-categoria/${categoria.id}`} className="w-full">
                            <Button variant="outline">Deletar</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
