import { Link } from 'react-router-dom'
import { Categoria } from '../../../models'
import { Button, Card, CardContent } from '../../../components'

interface CardCategoriasProps {
    categoria: Categoria
}

export function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <Card className="w-full h-full max-w-xs sm:max-w-sm m-auto p-6 shadow-lg flex flex-col">
            <CardContent className="flex-grow">
                <p>
                    <strong className="text-lg font-semibold">Categoria:</strong> {categoria.cargo}
                </p>
            </CardContent>
            <div className="flex flex-col items-end sm:flex-row gap-4 mt-3">
                <Link to={`/editar-categoria/${categoria.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                        Editar
                    </Button>
                </Link>
                <Link to={`/deletar-categoria/${categoria.id}`} className="w-full">
                    <Button className="w-full">Deletar</Button>
                </Link>
            </div>
        </Card>
    )
}
