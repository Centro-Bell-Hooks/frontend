/* import { Inicio } from './inicio' */
import { Sobre } from './sobre'
import { Contato } from './contato'
import Carrossel from '../../components/carrossel/Carrossel'
import { Inicio } from './inicio'



export function Home() {
    return (
        <>
            <div>
                <Carrossel />
            </div>
            <Inicio />
            {/*  <Inicio /> */}

            <Sobre />
            <Contato />
        </>
    )
}
