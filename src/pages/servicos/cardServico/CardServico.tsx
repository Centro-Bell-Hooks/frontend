import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { Alert, Button, Card, CardContent, CardTitle } from '../../../components'
import { AuthContext } from '../../../contexts'
import { Servico } from '../../../models'
import { formatarData } from '../../../utils'
interface CardServicoProps {
    servico: Servico
}

export function CardServico({ servico }: CardServicoProps) {
    const data = formatarData(servico.data)
    const { usuario } = useContext(AuthContext)
    const tipoUsuario = usuario.tipo !== 'candidato'

    function cadastroDaCandidatura() {
        Alert({ mensagem: 'Candidatura realizada com sucesso!', tipo: 'success' })
    }

    return (
        <Card className="p-6 flex flex-col shadow-lg">
            <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-4 font-semibold text-center">{servico.titulo}</CardTitle>

                <div className="gap-2 flex justify-between">
                    <p>
                        <strong className="font-semibold">Empresa: </strong> <br /> {servico.nome}
                    </p>
                    <p>
                        <strong className="font-semibold">Categoria: </strong> <br /> {servico.categoria?.cargo}
                    </p>
                    <p>
                        <strong className="font-semibold">Data: </strong> <br /> {data}
                    </p>
                </div>
                <hr className="border-1 border-primaria my-4" />
                <p>
                    <strong className="font-semibold">Descrição: </strong> {servico.descricao}
                </p>
            </CardContent>

            {tipoUsuario ? (
                <div className="flex gap-4 mt-5">
                    <Link to={`/editar-servico/${servico.id}`} className="w-full">
                        <Button className="w-full" variant="outline">
                            Editar
                        </Button>
                    </Link>
                    <Link to={`/deletar-servico/${servico.id}`} className="w-full">
                        <Button className="w-full">Deletar</Button>
                    </Link>
                </div>
            ) : (
                <Button onClick={cadastroDaCandidatura} className="w-full mt-5">
                    Candidatar-se
                </Button>
            )}
        </Card>
    )
}
