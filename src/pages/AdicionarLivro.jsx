import Sidebar from "../Components/Sidebar"
import BuscarLivro from "../Components/BuscarLivro"
import ListaDeLivros from "../Components/ListaDeLivros"
import DadosLivros from "../Components/DadosLivros"
import { useState } from "react"

function AdicionarLivro () {
  const [livros, setLivros] = useState([])

  async function buscarLivros(titulo) {
    const resposta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`)

        const dados = await resposta.json()

        setLivros(dados.docs)
  }

    return (
        <div className="flex w-full max-h-230">
          <div className="left-0 top-0 h-screen pr-5">
            < Sidebar />
          </div>

          <div  className="flex flex-col w-180 border border-bege mt-5 mb-5 rounded-lg p-5">
            < BuscarLivro buscar={buscarLivros}  />
            < ListaDeLivros livros={livros}  />
          </div>

          <div className="mt-5 mb-5 ml-5">
            < DadosLivros />
          </div>
        </div>
    )
}

export default AdicionarLivro