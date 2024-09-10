import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { AuthContext } from '../../contexts'; 
import { atualizar } from '../../services/Service'; 
import { Card, CardContent, CardTitle, Button, Input, Alert } from '../../components'; 
import { Usuario } from '../../models';
import { valoresIniciais } from '../../contexts';

export function EditarPerfilAluno () {
    const { usuario, } = useContext(AuthContext)
    const [estado, setEstado] = useState<Usuario>(valoresIniciais);
    const [isLoading, setIsLoading] = useState(false);
    const token = usuario.token
    const navigate = useNavigate(); // Para redirecionamento

    // Função para atualizar o estado do usuário conforme os inputs mudam
    const atualizarEstado = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value,
        });
    };

    // Função para atualizar o perfil do aluno
    const atualizarPerfil = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await atualizar(`/usuarios/atualizar`, estado, setEstado, {
                headers: {
                    Authorization: token,
                },
            });
            Alert({ mensagem: 'Perfil atualizado com sucesso!' });
        } catch (error: any) {

                Alert({ mensagem: 'Erro ao atualizar o perfil, tente novamente.', tipo: 'error' });
            }
         finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardContent>
                    <CardTitle>Editar Perfil</CardTitle>
                    <form onSubmit={atualizarPerfil}>
                        <div className="flex flex-col gap-4">
                            {/* Nome */}
                            <Input
                                name="nome"
                                placeholder="Digite seu nome completo"
                                value={usuario.nome}
                                onChange={atualizarEstado}
                            />
                            {/* Email */}
                            <Input
                                name="usuario"
                                type="email"
                                placeholder="Digite seu email"
                                value={usuario.usuario}
                                onChange={atualizarEstado}
                            />
                            {/* Senha */}
                            <Input
                                name="senha"
                                placeholder="Digite sua nova senha"
                                value={usuario.senha}
                                onChange={atualizarEstado}
                            />

                            {/* Botão de submissão */}
                            <Button
                                type="submit"
                                disabled={usuario.usuario === ''}
                            >
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <>Atualizar Perfil</>
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

