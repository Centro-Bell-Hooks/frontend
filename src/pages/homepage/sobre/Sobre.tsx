import { GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Sobre() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-2 items-center justify-center">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-14 text-primaria">Sobre nós</h1>
                    <p className="text-justify text-lg text-cinza mb-8">
                        Somos o Centro Bell Hooks, uma instituição criada em 2024 por 7 alunos da turma de JavaScript-05
                        da Generation Brasil, nossa instituição tem o foco de buscar cursos exclusivamente para
                        mulheres, o objetivo é inserir mulheres no mercado de trabalho e diminuir a desigualdade que
                        existe na área de tecnologia. Esperamos concluir essa missão com sucesso.
                    </p>
                    <Link
                        to="https://github.com/Centro-Bell-Hooks"
                        className="flex gap-3 items-center justify-center text-primaria hover:text-secundaria"
                    >
                        <GithubLogo size={34} weight="bold" />
                        <p className="text-lg font-semibold">Acesse nosso Github</p>
                    </Link>
                </div>

                <div className='w-full max-w-[350px] flex justify-self-center'>
                    <Link to="https://pt.wikipedia.org/wiki/Bell_hooks">
                        <img
                            src="src/assets/wepik-abstract-aesthetic-woman-instagram-post-20240827162342brNR.png"
                            alt="Bell Hooks"
                        />

                        <p className="font-bold font-black">Sobre Bell Hooks</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
