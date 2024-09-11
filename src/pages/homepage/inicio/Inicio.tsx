import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Box, Button } from '../../../components'
import { routes } from '../../../routes'
import { AuthContext } from '../../../contexts'

export function Inicio() {
    const { usuario } = useContext(AuthContext)
    const token = usuario.token === ''

    return (
        // ver o padding
        <div className="h-screen py-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl mb-8">CENTRO BELL HOOKS</h1>
            <p className="leading-3 text-center mb-8 tracking-widest first-letter:text-xl max-w-[80%] text-primaria">
                Nossa missão é capacitar, empoderar e conectar meninas e mulheres à educação de qualidade, ter
                conhecimento de seus direitos e usufruir de networking seguro.
            </p>
            <div className="flex gap-8">
                <div className="flex flex-col items-center max-w-[300px]">
                    <img className="max-w-[200px] mb-4" src="/assets/emporwer.svg" alt="Imagem de Empoderamento" />
                    <p className="font-semibold tracking-widest text-center mb-4">Empoderamento</p>
                    <p className="text-center">
                        Nosso objetivo de empoderar mulheres através da educação e conscientização é um dos nossos
                        principais pilares.
                    </p>
                </div>

                <div className="flex flex-col items-center max-w-[300px]">
                    <img className="max-w-[200px] mb-4" src="/assets/onlinelearning.svg" alt="Imagem de Educação" />
                    <p className="font-semibold tracking-widest text-center mb-4">Educação</p>
                    <p className="text-center">
                        A educação de qualidade é essencial para que mulheres alcancem lugares na qual são limitadas de
                        acessar.
                    </p>
                </div>

                <div className="flex flex-col items-center max-w-[300px]">
                    <img className="max-w-[200px] mb-4" src="/assets/businesswoman.svg" alt="Imagem de Networking" />
                    <p className="font-semibold tracking-widest text-center mb-4">Networking</p>
                    <p className="text-center">
                        Com conexões seguras com outras mulheres, as oportunidades e rede de apoio se expandem.
                    </p>
                </div>
            </div>
        </div>
    )
}
