import axios from 'axios'

const api = axios.create({
    baseURL: 'https://centro-bell-hooks.onrender.com/',
})

export const auth = async (url: string, dados: object, setDados: (dados: any) => void) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastraCategoria = async (url: string, dados: object, setDados: (dados: any) => void, header: object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
}