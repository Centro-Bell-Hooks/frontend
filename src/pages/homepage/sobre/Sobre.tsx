
export function Sobre() {
    return (
        <div className="py-12 bg-gray-100">
           
            <div className="flex justify-center mb-8">
               
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                    Quem somos nós?
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Somos o Centro Bell Hooks, uma instituição criada em 2024 por 7 alunos da turma de JavaScript-05 da Generation Brasil,
                    nossa instituição tem o foco de buscar cursos exclusivamente para mulheres, o objetivo é inserir mulheres no mercado de trabalho
                    e diminuir a desigualdade que existe na área de tecnologia. Esperamos concluir essa missão com sucesso.
                </p>

                
                <div className="text-center">
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://github.com/Centro-Bell-Hooks"
                        className="text-blue-500 hover:text-blue-700 text-xl font-semibold"
                    >
                        Github
                    </a>
                    <p className="text-gray-600 mt-4">7 desenvolvedores</p>
                    <p className="text-gray-600">1 objetivo</p>
                </div>
            </div>
        </div>
    );
}
