import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { AuthContext } from '../../../contexts';
import { Categoria } from '../../../models';
import { atualizar, buscar, cadastrar } from '../../../services';
import { Alert, Button, Card, CardContent, CardTitle, Input, Box } from '../../../components';
import { routes } from '../../../routes';

const valoresIniciais = {
    id: 0,
    tipo: 'curso',
    cargo: '',
    servico: null,
};

export function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>(valoresIniciais);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

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
            if (error.toString().includes('401')) handleLogout();
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                });
                Alert({ mensagem: 'Categoria atualizada com sucesso!' });
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                });
                Alert({ mensagem: 'Categoria cadastrada com sucesso!' });
            }
        } catch (error: any) {
            if (error.toString().includes('401')) handleLogout();
            else Alert({ mensagem: 'Erro ao salvar a Categoria.', tipo: 'error' });
        }

        setIsLoading(false);
        navigate(routes.categorias);
    }

    return (
        <Box className="min-h-screen p-4 sm:p-8">
            <Card className="w-full max-w-md shadow-lg mx-auto">
                <CardTitle className="text-3xl text-center my-4">
                    {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                </CardTitle>
                <CardContent>
                    <form onSubmit={gerarNovaCategoria}>
                        <div className="flex flex-col gap-3">
                            <Input
                                name="cargo"
                                placeholder="Nova categoria"
                                value={categoria.cargo}
                                onChange={atualizarEstado}
                            />
                        </div>
                        <Button type="submit" className="w-full mt-3">
                            {isLoading ? (
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                />
                            ) : (
                                <>{id === undefined ? 'Cadastrar' : 'Atualizar'}</>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}
