import { useState } from 'react'

import { Input, Select } from '../../../../components'

export function FiltroServico() {
    const [buscar, setBuscar] = useState({ nome: '' })

    function handleBuscar(e) {
        setBuscar({
            ...buscar,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <div className="grid grid-cols-[4fr_1fr_1fr] mb-8 gap-3 justify-between">
                <Input
                    className="w-full max-w-[500px] border border-primaria"
                    name="buscar"
                    placeholder="Pesquise cursos"
                    value={buscar.nome}
                    onChange={handleBuscar}
                />
                <Select
                    className="w-full max-w-[200px] border border-primaria"
                    name="nome"
                    defaultValue="Instituição"
                    onChange={() => {}}
                    values=""
                />
                <Select
                    className="w-full max-w-[200px] border border-primaria"
                    name="cargo"
                    defaultValue="Área de atuação"
                    onChange={() => {}}
                    values=""
                />
            </div>
        </div>
    )
}
