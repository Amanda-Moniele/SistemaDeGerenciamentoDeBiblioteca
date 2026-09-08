import Sidebar from "../Components/Sidebar"
import BuscarLivro from "../Components/BuscarLivro"
import ListaDeLivros from "../Components/ListaDeLivros"
import DadosLivros from "../Components/DadosLivros"
import { useState } from "react"
import {useQuery,keepPreviousData} from "@tanstack/react-query"
import { buscarLivros } from "../services/Livros"

function AdicionarLivro() {

  const [titulo, setTitulo] = useState("")
  const [pagina, setPagina] = useState(1)
  const [livroSelecionado, setLivroSelecionado] = useState(null)

  function handleSelecionarLivro(livro) {
    setLivroSelecionado(livro)
  }

  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    isPlaceholderData
  } = useQuery({

    queryKey: ["livros", titulo, pagina],

    queryFn: () => buscarLivros(titulo, pagina),

    enabled: titulo.length > 0,

    placeholderData: keepPreviousData
  })


  function handleBuscar(novoTitulo) {

    setTitulo(novoTitulo)

    setPagina(1)
  }


  const totalPaginas = data
    ? Math.ceil(data.numFound / 10)
    : 0


  return (
    <div className="flex w-full max-h-230">

      <div className="left-0 top-0 h-screen pr-5">
        <Sidebar />
      </div>


      <div className="flex flex-col w-180 border border-bege mt-5 mb-5 rounded-lg p-5">

        <BuscarLivro buscar={handleBuscar} />


        {isPending && (
          <p className="mt-5">
            Carregando livros...
          </p>
        )}


        {isError && (
          <p className="mt-5 text-red-500">
            Erro: {error.message}
          </p>
        )}


        {data && (
          <ListaDeLivros livros={data.docs} selecionarLivro={handleSelecionarLivro} />
        )}


        {isFetching && !isPending && (
          <p className="text-center mt-3">
            Buscando...
          </p>
        )}


        {data && data.numFound > 0 && (
          <div className="flex justify-center items-center gap-5 mt-5">

            <button
              onClick={() =>
                setPagina(
                  (paginaAtual) => paginaAtual - 1
                )
              }
              disabled={
                pagina === 1 ||
                isFetching
              }
              className="bg-marromEscuro text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Anterior
            </button>


            <span>
              Página {pagina} de {totalPaginas}
            </span>


            <button
              onClick={() =>
                setPagina(
                  (paginaAtual) => paginaAtual + 1
                )
              }
              disabled={
                pagina >= totalPaginas ||
                isFetching ||
                isPlaceholderData
              }
              className="bg-marromEscuro text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Próxima
            </button>

          </div>
        )}

      </div>


      <div className="mt-5 mb-5 ml-5">
        <DadosLivros livro={livroSelecionado} />
      </div>

    </div>
  )
}

export default AdicionarLivro