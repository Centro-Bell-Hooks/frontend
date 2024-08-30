import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <>
            <div className="w-full bg-fuchsia-800 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <Link to="/" className="text-2x1 font-bold ml-4">
                        Centro Bell Hooks
                    </Link>

                    <div className="flex gap-4">
                        <div className="hover:underline font-bold">Sobre</div>
                        <div className="hover:underline font-bold">Contato</div>
                    </div>
                </div>
            </div>
        </>
    )
}
