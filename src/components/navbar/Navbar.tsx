import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export function Navbar() {
    return (
        <div className="w-full bg-primaria text-white flex justify-center py-4">
            <div className="container flex justify-between text-lg">
                <Link to={routes.homepage} className="text-2x1 font-bold ml-4">
                    Centro Bell Hooks
                </Link>

                <div className="flex gap-4">
                    <div className="hover:underline font-bold">Sobre</div>
                    <div className="hover:underline font-bold">Contato</div>
                    <Link to={routes.login} className="hover:underline font-bold">
                        Login
                    </Link>
                    <Link to={routes.categoria} className="hover:underline font-bold">
                        Listar Categorias
                    </Link>
                    <Link to="/categorias" className="hover:underline font-bold">
                        Categorias
                    </Link>
                    <Link to="/cadastroCategoria" className="hover:underline font-bold">
                        Cadastrar Categoria
                    </Link>
                    <Link to="/produtos" className="hover:underline font-bold">
                        Produtos
                    </Link>
                </div>
            </div>
        </div>
    )
}
