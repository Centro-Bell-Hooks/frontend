import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../../../contexts';
import { Categoria } from '../../../models';
import { buscar, deletar } from '../../../services';
import { routes } from '../../../routes';
import { Alert, Button, Card, CardContent, CardTitle, Box } from '../../../components';

export function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (id !== undefined) buscarPorId(id);
        if (token === '') {
            Alert({ mensagem: 'Você precisa estar logado.', tipo: 'info' });
            navigate(routes.login);
        }
    }, [token, id]);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                Alert({ mensagem: 'O token expirou, favor logar novamente.', tipo: 'info' });
                handleLogout();
            }
        }
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token },
            });
            Alert({ mensagem: 'Categoria apagada com sucesso!' });
            navigate(routes.categorias);
        } catch (error) {
            Alert({ mensagem: 'Erro ao apagar a Categoria, consulte o administrador.', tipo: 'error' });
        }
    }

    return (
        <Box className="min-h-screen p-4 sm:p-8">
            <Card className="w-full max-w-md shadow-lg mx-auto">
                <CardContent>
                    <CardTitle className="text-xl my-4 font-semibold text-center">Você deseja mesmo apagar?</CardTitle>
                    <p>
                        <strong className="font-semibold">Cargo:</strong> {categoria.cargo}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-5">
                        <Button variant="outline" onClick={() => navigate(routes.categorias)} className="w-full sm:w-auto">
                            Não
                        </Button>
                        <Button onClick={deletarCategoria} className="w-full sm:w-auto">
                            Sim
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
}
