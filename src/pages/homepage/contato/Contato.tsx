import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Contato() {
    return (
        <div className="h-screen flex flex-col justify-center items-center p-10 gap-y-10 mt-8 ">
            <h1 className="text-center text-4xl font-bold mb-14">Conheça nossos Desenvolvedores</h1>

            <div className="grid grid-cols-4 gap-x-5">
                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/arthur.jpeg?updatedAt=1725931441822"
                        alt="Arthur"
                        className="rounded-full max-w-[150px]"
                    />

                    <div className="flex flex-col gap-1">
                        <p className="text-center">Arthur</p>
                        <div className="flex">
                            <Link to="https://github.com/arthurlopes7" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/arthur-lopes-costa/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/danillo.jpeg?updatedAt=1725931442365"
                        alt="Danillo"
                        className="rounded-full max-w-[150px]"
                    />

                    <div className="flex flex-col gap-1">
                        <p className="text-center">Danillo</p>
                        <div className="flex">
                            <Link to="https://github.com/DanNilloOli" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/danillo-silva-oliveira/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/ezequiel.jpeg?updatedAt=1725931441731"
                        alt=""
                        className="rounded-full max-w-[150px]"
                    />

                    <div className="flex flex-col gap-1">
                        <p className="text-center">Ezequiel</p>
                        <div className="flex">
                            <Link to="https://github.com/EzeAlmeida" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/ezequiel-almeida-9ab8512ab/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/fernando.jpeg?updatedAt=1725931441955"
                        alt=""
                        className="rounded-full max-w-[150px]"
                    />

                    <div className="flex flex-col gap-1">
                        <p className="text-center">Fernando</p>
                        <div className="flex">
                            <Link to="https://github.com/FernandoCassioDev" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/fernando-cassio/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-9">
                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/leticia.jpeg?updatedAt=1725931442161"
                        alt=""
                        className="rounded-full max-w-[150px]"
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-center">Letícia</p>
                        <div className="flex">
                            <Link to="https://github.com/Virgilioleticia">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/let%C3%ADcia-virg%C3%ADlio/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/WhatsApp%20Image%202024-02-01%20at%2021.12.33.jpeg?updatedAt=1725933005474"
                        alt=""
                        className="rounded-full max-w-[150px]"
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-center">Liara</p>
                        <div className="flex">
                            <Link to="https://github.com/lidskey" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/liara-cristina/" className="Linkedin">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/lidskey/Foto%20Pessoal%20do%20PI/Imagem%20do%20WhatsApp%20de%202024-09-09%20%C3%A0(s)%2021.16.09_29952760.jpg?updatedAt=1725931442561"
                        alt=""
                        className="rounded-full max-w-[150px]"
                    />
                    <div className="flex flex-col gap-1">
                        <p className="text-center">Samira</p>
                        <div className="flex">
                            <Link to="https://github.com/sam-grs" className="Github">
                                <GithubLogo size={29} weight="bold" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/samira-grossi/" className="display-flex gap-2">
                                <LinkedinLogo size={29} weight="bold" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
