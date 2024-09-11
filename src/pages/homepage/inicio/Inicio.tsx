import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Button } from '../../../components'
import { routes } from '../../../routes'
import { AuthContext } from '../../../contexts'

export function Inicio() {
    const { usuario } = useContext(AuthContext)

    return (
        <div className="flex">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl mb-3 px-2">CENTRO BELL HOOKS</h1>
                <p className="leading-3 text-center mx-7 my-2 tracking-widest first-letter:text-xl mb-6 text-primaria">
                    Nossa missão é capacitar, empoderar e conectar meninas e mulheres à educação de qualidade, ter
                    conhecimento de seus direitos e usufruir de networking seguro.
                </p>

                <div className="flex display-flex gap-9 pt-8 pb-8 mb-9">
                    <div>
                        <p className="font-semibold tracking-widest text-center mb-4">Empoderamento</p>
                        <img className="max-w-[200px]" src="src/assets/emporwer.svg" alt="" />
                    </div>
                    <div>
                        <p className="font-semibold tracking-widest text-center mb-4">Educação</p>
                        <img className="max-w-[200px]" src="src/assets/onlinelearning.svg" alt="" />
                    </div>
                    <div>
                        <p className="font-semibold tracking-widest text-center mb-4">Networking</p>
                        <img className="max-w-[200px]" src="src/assets/businesswoman.svg" alt="" />
                    </div>
                </div>
                <Link to={routes.login}>
                    <Button>Entrar</Button>
                </Link>
            </div>
        </div>
    )
}
