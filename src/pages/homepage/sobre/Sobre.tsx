import { GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Sobre() {
    return (
        <div className="grid grid col-span-2">
            <div className="h-screen flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-14 text-gray-800">Sobre nós</h1>
                    <p className="text-justify text-lg text-gray-700 mb-8">
                        Somos o Centro Bell Hooks, uma instituição criada em 2024 por 7 alunos da turma de JavaScript-05
                        da Generation Brasil, nossa instituição tem o foco de buscar cursos exclusivamente para
                        mulheres, o objetivo é inserir mulheres no mercado de trabalho e diminuir a desigualdade que
                        existe na área de tecnologia. Esperamos concluir essa missão com sucesso.
                    </p>
                </div>

                <div className="h-screen ml-96 w-64 h-64 gap-8">
                    <Link to="https://pt.wikipedia.org/wiki/Bell_hooks">
                        <img
                            src="src/assets/wepik-abstract-aesthetic-woman-instagram-post-20240827162342brNR.png"
                            alt="Bell Hooks"
                        />

                        <p className="font-bold font-black">Sobre Bell Hooks</p>
                    </Link>
                </div>
            </div>
            <div className="">
                <Link
                    to="https://github.com/Centro-Bell-Hooks"
                    className=" mb-2 text-primaria hover:text-secundaria text-xl font-semibold"
                >
                    <GithubLogo size={34} weight="bold" />
                </Link>
                <p className="text-gray-600 text-xl">7 desenvolvedores</p>
                <p className="text-gray-600 text-xl">3 repositórios</p>
            </div>
        </div>
    )
}
