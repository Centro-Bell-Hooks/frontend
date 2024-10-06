import { Sobre } from './sobre'
import { Contato } from './contato'
import { Carrossel } from './carrossel'
import { Inicio } from './inicio'

export function Home() {
    return (
        <>
            <Carrossel />
            <Inicio />
            <Sobre />
            <Contato />
        </>
    )
}
