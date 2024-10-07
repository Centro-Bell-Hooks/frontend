import { Box } from '../../../components'

export function Inicio() {
    return (
        <Box>
            <section id="inicio" className="lg:h-screen flex flex-col justify-center items-center">
                <div className="md:max-w-[70%]">
                    <h1 className="flex flex-col justify-center items-center mb-4 font-bold text-2xl">
                        CENTRO BELL HOOKS
                    </h1>
                    <p className="leading-6 text-center mb-8 tracking-widest first-letter:text-xl text-primaria">
                        Nossa missão é capacitar, empoderar e conectar meninas e mulheres à educação de qualidade, ter
                        conhecimento de seus direitos e usufruir de networking seguro.
                    </p>
                </div>
                <div className="md:text-base grid grid-cols-1 min-[750px]:grid-cols-2  min-[1000px]:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-full max-w-[400px] md:max-w-[300px] sm:h-[235px]"
                            src="/assets/empoderamento.svg"
                            alt="Imagem de Empoderamento"
                        />
                        <div className="min-[750px]:max-w-[300px]">
                            <p className="font-semibold tracking-widest text-center mb-4 text-lg text-primaria">
                                Empoderamento
                            </p>
                            <p className="text-center first-letter:text-xl text-primaria">
                                Nosso objetivo de empoderar mulheres através da educação e conscientização é um dos
                                nossos principais pilares.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            className="w-full max-w-[400px] md:max-w-[300px] sm:h-[225px] mb-3"
                            src="/assets/educacao.svg"
                            alt="Imagem de Educação"
                        />
                        <div className="min-[750px]:max-w-[300px]">
                            <p className="font-semibold tracking-widest text-center mb-4 text-lg text-primaria">
                                Educação
                            </p>
                            <p className="text-center first-letter:text-xl text-primaria">
                                A educação de qualidade é essencial para que mulheres alcancem lugares na qual são
                                limitadas de acessar.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center min-[750px]:col-span-2 min-[1000px]:col-span-1 justify-self-center">
                        <img
                            className="w-full max-w-[400px] md:max-w-[300px] sm:h-[220px] mb-4"
                            src="/assets/contatos.svg"
                            alt="Imagem de Networking"
                        />
                        <div className="min-[750px]:max-w-[400px] md:max-w-[300px]">
                            <p className="font-semibold tracking-widest text-center mb-4 text-lg text-primaria">
                                Networking
                            </p>
                            <p className="text-center first-letter:text-xl text-primaria">
                                Com conexões seguras com outras mulheres, as oportunidades e rede de apoio se expandem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    )
}
