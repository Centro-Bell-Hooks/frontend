import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Box, Button } from '../../../components'
import { routes } from '../../../routes'
import { AuthContext } from '../../../contexts'

export function Inicio() {
    const { usuario } = useContext(AuthContext)
    const token = usuario.token === ''

    return (
        // depois tirar o mt-80
        <Box>
            <div className="md:h-screen py-4 flex flex-col justify-center items-center relative">
                <div className="md:max-w-[70%]">
                    <h1 className="flex flex-col justify-center items-center pb-4 font-bold text-2xl">
                        CENTRO BELL HOOKS
                    </h1>
                    <p className="leading-3 text-center mb-8 tracking-widest first-letter:text-xl text-primaria">
                        Nossa missão é capacitar, empoderar e conectar meninas e mulheres à educação de qualidade, ter
                        conhecimento de seus direitos e usufruir de networking seguro.
                    </p>
                </div>
                <div className="md:text-base flex flex-col gap-y-12 md:flex-row md:gap-3">
                    <div className="flex flex-col items-center md:max-w-[300px]">
                        <img
                            className="md:max-w-[300px] mb-4"
                            src="/assets/emporwer.svg"
                            alt="Imagem de Empoderamento"
                        />
                        <p className="font-semibold tracking-widest text-center mb-4">Empoderamento</p>
                        <p className="text-center">
                            Nosso objetivo de empoderar mulheres através da educação e conscientização é um dos nossos
                            principais pilares.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:max-w-[300px]">
                        <img className="md:max-w-[300px] mb-4" src="/assets/onlinelearning.svg" alt="Imagem de Educação" />
                        <p className="font-semibold tracking-widest text-center mb-4">Educação</p>
                        <p className="text-center">
                            A educação de qualidade é essencial para que mulheres alcancem lugares na qual são limitadas
                            de acessar.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:max-w-[280px]">
                        <img className="md:max-w-[280px] mb-4" src="/assets/businesswoman.svg" alt="Imagem de Networking" />
                        <p className="font-semibold tracking-widest text-center mb-4">Networking</p>
                        <p className="text-center">
                            Com conexões seguras com outras mulheres, as oportunidades e rede de apoio se expandem.
                        </p>
                    </div>
                </div>
            </div>
        </Box>
    )
}
