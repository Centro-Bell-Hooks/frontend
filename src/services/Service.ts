import axios from 'axios'

const api = axios.create({
    baseURL: 'https://centro-bell-hooks.onrender.com/',
})

export const auth = async (url: string, dados: object, setDados: (dados: any) => void) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: object, setDados: (dados: any) => void, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const buscar = async (url: string, setDados: (dados: any) => void, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: object, setDados: (dados: any) => void, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: object) => {
    await api.delete(url, header)
}
