import { Link } from 'react-router-dom';
import { Categoria } from '../../../models';
import { Button, Card, CardContent } from '../../../components';

interface CardCategoriasProps {
    categoria: Categoria;
}

export function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 shadow-lg">
            <CardContent>
                <p>
                    <strong className="text-lg font-semibold">Categoria:</strong> {categoria.cargo}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link to={`/editar-categoria/${categoria.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                            Editar
                        </Button>
                    </Link>
                    <Link to={`/deletar-categoria/${categoria.id}`} className="w-full">
                        <Button className="w-full">Deletar</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
