import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Button } from '../../../components'
import { routes } from '../../../routes'
import { AuthContext } from '../../../contexts'

export function Inicio() {
    const { usuario } = useContext(AuthContext)

    return (
        <div className="flex items-center justify-center my-12 gap-4 h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl mb-3">Seja Bem vindo!</h1>

                <Link to={routes.login}>
                    <Button>{usuario.token === '' ? 'Entrar' : 'Acesse nossos Serviços'}</Button>
                </Link>
            </div>
            <img className="w-1/3" src="src/assets/computador.svg" alt="Computador" />
        </div>
    )
}
