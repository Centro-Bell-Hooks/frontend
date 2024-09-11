import 'reactjs-popup/dist/index.css'
import './ModalServicos.css'


import { FormServico } from '../formServico/FormServico'
import Popup from 'reactjs-popup'


function ModalServicos() {
    return (
        <>
            <Popup
                trigger={
                    <button className="border rounded px-4 py-2  border-white hover:bg-white hover:text-indigo-800">
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormServico />
            </Popup>
        </>
    )
}

export default ModalServicos
