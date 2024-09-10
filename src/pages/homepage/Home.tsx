/* import { Inicio } from './inicio' */
import { Sobre } from './sobre'
import { Contato } from './contato'
import Carrossel from '../../components/carrossel/Carrossel'



export function Home() {
    return (
        <>
            <div>
                <Carrossel />
            </div>
           {/*  <Inicio /> */}

            <Sobre />
            <Contato />
        </>
    )
}
