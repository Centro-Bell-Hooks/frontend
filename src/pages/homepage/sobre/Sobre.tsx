import { Link } from 'react-router-dom'
import { Box } from '../../../components'

export function Sobre() {
    return (
        <div className="bg-gray-100 w-full">
            <Box>
                <div className="h-[100vh] flex justify-center items-center">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-center mb-5 text-primaria">Sobre nós</h1>
                            <p className="display-flex p-6 text-justify text-lg text-cinza mb-1">
                                Somos o <span className="font-bold">Centro Bell Hooks</span>, uma instituição criada em
                                2024 por 7 alunos da turma de JavaScript-05 da Generation Brasil. Temos como base a ODS
                                5 - Igualdade de Gênero, por isso, nossa instituição tem o foco de fazer um{' '}
                                <span className="font-bold">gancho</span> entre cursos profissionalizantes para
                                mulheres. O objetivo central é inserir mulheres no mercado de trabalho para que possam
                                ter seu autossustento. Esperamos colaborar com a{' '}
                                <span className="font-bold">resolução</span> dessa problemática.
                            </p>
                            <Link
                                to="https://github.com/Centro-Bell-Hooks"
                                className="flex gap-3 items-center justify-center text-primaria hover:underline"
                            >
                                <p className="text-lg font-semibold">Acesse nosso Projeto</p>
                            </Link>
                        </div>

                        <div className="w-full max-w-[350px] flex flex-col justify-self-center">
                            <img
                                src="/assets/wepik-abstract-aesthetic-woman-instagram-post-20240827162342brNR.png"
                                alt="Imagem Bell Hooks"
                            />
                            <h1 className="font-bold text-primaria text-center m-3">Sobre Bell Hooks</h1>
                            <p className="text-justify text-primaria">
                                Mulher negra, nascida em 1952 e falecida em 2021. Seu nome é homenagem ao símbolo de
                                resistência de mulheres negras por três gerações. Teórica feminista renomada com
                                doutorado em Literatura. Autora de mais de 30 livros e muitos artigos acadêmicos.
                                "Teoria Feminista" é um marco na teoria feminista de estudos de gênero, raça e classe.
                                Foi vencedora do The American Book Award, um dos prêmios literários mais prestigiados
                                dos EUA.{' '}
                                <Link
                                    to="https://pt.wikipedia.org/wiki/Bell_hooks"
                                    className="hover:underline font-semibold text-primaria"
                                >
                                    Saiba mais
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
