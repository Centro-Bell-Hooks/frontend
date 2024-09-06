import { Link } from 'react-router-dom'
import { Produto } from '../../models'


interface CardProdutoProps {
  produto: Produto
}

export function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex text-slate-100 w-full bg-emerald-600 py-2 px-4 items-center gap-4">
          {/* <img src={produto.} className='h-12 rounded-full' alt="" /> */}
          <h3 className="text-lg font-bold text-center uppercase">{produto.titulo}</h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{produto.nome}</h4>
          <p>{produto.descricao}</p>
           <div className='mt-4'>
                    <p className='text-sm text-gray-950'>Categoria: {produto.categoria?.cargo}</p>
                    <p className='text-sm text-gray-950'>
                        Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(produto.data))}
                    </p>
                </div> 
                </div> 
    

      </div>
      <div className="flex">
      <Link to={`/editarProduto/${produto.id}`} className="w-full text-white bg-emerald-400 hover:bg-emerald-800 flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className="text-white bg-emerald-400 hover:bg-emerald-800 w-full flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto