import { GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Sobre() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-2 items-center justify-center">
                <div>
                    <h1 className="text-4xl font-bold text-center mb-5 text-primaria">Sobre nós</h1>
                    <p className="display-flex p-6 text-justify text-lg text-cinza mb-8">
                        Somos o <span className="font-bold">Centro Bell Hooks</span>, uma instituição criada em 2024 por
                        7 alunos da turma de JavaScript-05 da Generation Brasil. Temos como base a ODS 5 - Igualdade de
                        Gênero, por isso, nossa instituição tem o foco de fazer um{' '}
                        <span className="font-bold">gancho</span> entre cursos profissionalizantes e técnicos e
                        mulheres. O objetivo central é inserir mulheres no mercado de trabalho e diminuir a desigualdade
                        que existe na área de tecnologia e correlatas, assim como proporcionar um ambiente seguro de
                        networking. Esperamos colaborar com a <span className="font-bold">resolução</span> dessa
                        problemática.
                    </p>
                    <Link
                        to="https://github.com/Centro-Bell-Hooks"
                        className="flex gap-3 items-center justify-center text-primaria hover:text-secundaria"
                    >
                        <GithubLogo size={34} weight="bold" />
                        <p className="text-lg font-semibold">Acesse nosso Github</p>
                    </Link>
                </div>

                <div className="w-full max-w-[350px] flex justify-self-center">
                    <Link to="https://pt.wikipedia.org/wiki/Bell_hooks">
                        <img
                            src="src/assets/wepik-abstract-aesthetic-woman-instagram-post-20240827162342brNR.png"
                            alt="Bell Hooks"
                        />
                        <h1 className="font-bold font-black text-center m-3">Sobre Bell Hooks</h1>
                        <p className="text-justify text-primaria">
                            Mulher negra, nascida em 1952 e falecida em 2021. Símbolo de resistência de mulheres
                            negras por três gerações. Teórica feminista renomada com doutorado em Literatura Autora de
                            mais de 30 livros e muitos artigos acadêmicos. "Teoria Feminista" é um marco na teoria
                            feminista e estudos de raça e classe Vencedora do The American Book Award, um dos prêmios
                            literários mais prestigiados dos EUA.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
