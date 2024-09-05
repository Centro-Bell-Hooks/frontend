export function Inicio() {
    return (
        <div className="flex items-center justify-center my-12 gap-4 h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl">Seja Bem vindo!</h1>
                <button className="bg-fuchsia-800 text-white rounded py-2 px-8 hover:bg-fuchsia-700 mt-4">
                    Entrar
                </button>
            </div>
            <img className="w-1/3" src="src/assets/computador.svg" alt="Computador" />
        </div>
    )
}
