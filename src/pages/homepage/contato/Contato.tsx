import { Link } from 'react-router-dom'

export function Contato() {
    return (
        <div className="h-screen flex flex-col justify-center items-center p-10 gap-y-10">
            <h1 className="text-center text-4xl font-bold mb-14">Conheça nossos Desenvolvedores</h1>

            <div className="grid grid-cols-4 gap-x-5">
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Arthur</p>
                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Danilo</p>

                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Ezequiel</p>
                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Fernando</p>
                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-x-5">
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Letícia</p>
                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Liara</p>
                        <Link to="" className="">
                            Github
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-fuchsia-800 p-16 rounded-full max-h-20"></div>
                    <div>
                        <p className="">Samira</p>
                        <Link to="https://github.com/sam-grs" className="">
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
