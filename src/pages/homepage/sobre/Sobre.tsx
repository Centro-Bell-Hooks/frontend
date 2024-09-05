import { Link } from 'react-router-dom'

export function Sobre() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-14 text-gray-800">Quem somos nós?</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Somos o Centro Bell Hooks, uma instituição criada em 2024 por 7 alunos da turma de JavaScript-05 da
                    Generation Brasil, nossa instituição tem o foco de buscar cursos exclusivamente para mulheres, o
                    objetivo é inserir mulheres no mercado de trabalho e diminuir a desigualdade que existe na área de
                    tecnologia. Esperamos concluir essa missão com sucesso.
                </p>

                <Link
                    to="https://github.com/Centro-Bell-Hooks"
                    className="flex justify-center mb-2 text-blue-500 hover:text-blue-700 text-xl font-semibold"
                >
                    Github
                </Link>
                <div className="flex items-start justify-center gap-4">
                    <p className="text-gray-600 text-xl">7 desenvolvedores</p>
                    <p className="text-gray-600 text-xl">3 repositórios</p>
                </div>
            </div>
        </div>
    )
}
