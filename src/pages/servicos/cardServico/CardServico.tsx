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

    function candidatoSucesso() {
        Alert({ mensagem: 'Candidatura realizada com sucesso!', tipo: 'success' })
    }

    return (
        <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4">
            <CardContent>
                <CardTitle className="text-xl my-4 font-semibold text-center">{servico.titulo}</CardTitle>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
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
                {tipoUsuario ? (
                    <div className="flex flex-col sm:flex-row gap-4 mt-5">
                        <Link to={`/editar-servico/${servico.id}`} className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto" variant="outline">
                                Editar
                            </Button>
                        </Link>
                        <Link to={`/deletar-servico/${servico.id}`} className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto">Deletar</Button>
                        </Link>
                    </div>
                ) : (
                    <Button onClick={candidatoSucesso} className="w-full mt-5 sm:mt-0">
                        Candidatar-se
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
