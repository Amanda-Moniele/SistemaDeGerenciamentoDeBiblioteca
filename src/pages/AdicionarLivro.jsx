import Sidebar from "../Components/Sidebar"
import BuscarLivro from "../Components/BuscarLivro"
import ListaDeLivros from "../Components/ListaDeLivros"
import DadosLivros from "../Components/DadosLivros"

function AdicionarLivro () {
    return (
        <div className="flex w-full">
          <div className="left-0 top-0 h-screen pr-5">
            < Sidebar />
          </div>

          <div  className="flex flex-col w-180 border border-bege mt-5 mb-5 rounded-lg p-5">
            < BuscarLivro />
            < ListaDeLivros />
          </div>

          <div className="mt-5 mb-5 ml-5">
            < DadosLivros />
          </div>
        </div>
    )
}

export default AdicionarLivro