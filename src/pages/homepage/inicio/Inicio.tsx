import { Link } from 'react-router-dom'

import { Button } from '../../../components'
import { routes } from '../../../routes'

export function Inicio() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl mb-3 px-2">CENTRO BELL HOOKS</h1>
                <p className="leading-3 font-thin text-center mx-7 my-2 tracking-widest first-letter:text-1xl mb-6">
                    Nossa missão é capacitar, empoderar e conectar meninas e mulheres à educação de qualidade, ter
                    conhecimento de seus direitos e usufruir de networking seguro.
                </p>

                <Link to={routes.login}>
                    <Button>Entrar</Button>
                </Link>
            </div>
            <img
                className="max-width: 768px"
                src="https://media.istockphoto.com/id/1475349134/pt/foto/programming-school-class.jpg?s=2048x2048&w=is&k=20&c=NHE5eNEDZbGlfTdGeiTYQfp95KgWucrJc7Q3geO4qpU="
                alt="Computador"
            />
        </div>
    )
}
