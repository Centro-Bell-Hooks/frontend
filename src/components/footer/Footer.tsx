

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="mt-80  bg-fuchsia-800 flex justify-center text-white py-8 text-center w-full min-full">
        {/* caso dê conflito com alguma section, tirar o > mt-80 < que indica margin para cima 80px */}
        <div className="text-xl-3">
        <p className="font-bold"> Centro Bell Hooks</p>
        <p className="font-light "> Copyright: {data}</p>
          <p className="font-bold mb-3">Acesse nossas redes sociais</p>
        <div className="flex justify-center gap-3">
          
              
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Footer


