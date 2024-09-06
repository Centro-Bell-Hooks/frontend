/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // para chamar a propriedades do tailwind ex: bg-primaria ou text-primaria, etc
            colors: {
                primaria: '#ecca51',
                secundaria: '',
                fonte: '#231B1B',
                link: '#737373',
                fundo: '#f8fafc',
                cor_texto: '',
            },
        },
    },
    plugins: [],
}
