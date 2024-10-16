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
        <Card className="p-6 flex flex-col">
            <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-4 font-semibold text-center">{servico.titulo}</CardTitle>

                <div className="max-[400px]:grid max-[400px]:grid-cols-2 gap-5 min-[401px]:flex justify-between">
                    <p className="max-[400px]:text-center">
                        <strong className="font-semibold">Empresa: </strong> <br /> {servico.nome}
                    </p>
                    <p className="max-[400px]:text-center">
                        <strong className="font-semibold">Categoria: </strong> <br /> {servico.categoria?.cargo}
                    </p>
                    <p className="max-[400px]:text-center max-[400px]:col-span-2">
                        <strong className="font-semibold">Data: </strong> <br /> {data}
                    </p>
                </div>
                <hr className="border-1 border-primaria my-4" />
                <p>
                    <strong className="font-semibold">Descrição: </strong> {servico.descricao}
                </p>
            </CardContent>

            {tipoUsuario ? (
                <div className="flex justify-between gap-4 mt-8">
                    <Link to={`/editar-servico/${servico.id}`} className="max-[800px]:max-w-[200px] w-full">
                        <Button className="w-full" variant="outline">
                            Editar
                        </Button>
                    </Link>
                    <Link to={`/deletar-servico/${servico.id}`} className="max-[800px]:max-w-[200px] w-full">
                        <Button className="w-full">Deletar</Button>
                    </Link>
                </div>
            ) : (
                <Button onClick={cadastroDaCandidatura} className="max-[800px]:max-w-[100px] w-full mt-5">
                    Candidatar-se
                </Button>
            )}
        </Card>
    )
}
