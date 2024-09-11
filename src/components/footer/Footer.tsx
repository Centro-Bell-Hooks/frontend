import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

import { routes } from '../../routes'

export function Footer() {
    const data = new Date().getFullYear()
    const location = useLocation()
    const auth = location.pathname === routes.login || location.pathname === routes.cadastro

    return (
        <>
            {!auth && (
                <>
                    <hr className="bg-secundaria h-1" />
                    <div className="h-[100px] bg-primaria flex items-center justify-center">
                        <div className="flex flex-col gap-1 text-md text-light text-center">
                            <p className="font-semibold text-lg">Centro Bell Hooks {data}</p>
                            <Link to="https://github.com/Centro-Bell-Hooks" aria-label="Github Centro Bell Hooks">
                                <p className="font-semibold hover:underline">Acesse nosso projeto</p>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
