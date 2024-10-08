import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Box } from '../../../components'

export function Contato() {
    return (
        <Box>
            <section id="contato" className="lg:h-screen">
                <h1 className="text-center text-2xl md:text-4xl font-bold mb-14">Conheça nosso time</h1>

                <div className="grid justify-items-center min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 max-[800px]:gap-x-5 gap-y-10">
                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/arthur.jpeg?updatedAt=1725931441822"
                                alt="Arthur"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Arthur Lopes</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link
                                to="https://github.com/arthurlopes7"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/arthur-lopes-costa/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/danillo.jpeg?updatedAt=1725931442365"
                                alt="Danillo"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Danillo Oliveira</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Link
                                to="https://github.com/DanNilloOli"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/danillo-silva-oliveira/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/ezequiel.jpeg?updatedAt=1725931441731"
                                alt="Ezequiel"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Ezequiel Almeida</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Link
                                to="https://github.com/EzeAlmeida"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/ezequiel-almeida-9ab8512ab/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/fernando.jpeg?updatedAt=1725931441955"
                                alt="Fernando"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Fernando Cassio</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <Link
                                to="https://github.com/FernandoCassioDev"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/fernando-cassio/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/leticia.jpeg?updatedAt=1725931442161"
                                alt="Letícia"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Letícia Virgilio</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Link
                                to="https://github.com/Virgilioleticia"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/let%C3%ADcia-virg%C3%ADlio/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8 sm:mb-5">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/WhatsApp%20Image%202024-02-01%20at%2021.12.33.jpeg?updatedAt=1725933005474"
                                alt="Liara"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Liara Cristina</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Link to="https://github.com/lidskey" className="flex items-center gap-2 hover:underline">
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/liara-cristina/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>

                    {/* o span nao esta funcionando */}
                    <div className="flex min-[650px]:col-span-2 min-[900px]:col-span-3 items-center gap-3">
                        <div>
                            <img
                                src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/Imagem%20do%20WhatsApp%20de%202024-09-09%20%C3%A0(s)%2021.16.09_29952760.jpg?updatedAt=1725931442561"
                                alt="Samira"
                                className="rounded-full w-full max-w-[150px] min-[400px]:max-w-[200px] min-[650px]:max-w-[150px]"
                            />
                            <p className="text-center mt-1 font-semibold">Samira Grossi</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Link to="https://github.com/sam-grs" className="flex items-center gap-2 hover:underline">
                                <GithubLogo size={29} weight="bold" /> Github
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/samira-grossi/"
                                className="flex items-center gap-2 hover:underline"
                            >
                                <LinkedinLogo size={29} weight="bold" /> Linkedin
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    )
}
