import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {
    const data = new Date().getFullYear()

    return (
        <>
            <div className="mt-80  bg-fuchsia-800 flex justify-center text-white py-8 text-center w-full min-full">
                <div className="text-xl-3">
                    <p className="font-bold"> Centro Bell Hooks</p>
                    <p className="font-light "> Copyright: {data}</p>
                    <p className="font-bold mb-3">Acesse nossas redes sociais</p>
                    <div className="flex justify-center gap-3">
                        <a
                            target="_blank "
                            href="https://github.com/Centro-Bell-Hooks"
                            aria-label="Github Centro Bell Hooks"
                            rel="noopener"
                        >
                            <GithubLogo size={34} />
                        </a>
                        <LinkedinLogo size={34} />
                    </div>
                </div>
            </div>
        </>
    )
}
