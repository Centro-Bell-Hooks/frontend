/** @type {import('tailwindcss').Config} */
// (TESTE) criando cores customizadas para a nossa aplicação
// palhetas de cores preto com roxo?
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // para chamar ex: bg-primaria ou text-primaria, etc
            colors: {
                primaria: '#86198f',
                secundaria: '',
                fundo: '#f8fafc',
                cor_texto: '',
            },
        },
    },
    plugins: [],
}
