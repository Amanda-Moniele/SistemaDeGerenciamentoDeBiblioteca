import LivroEncontrado from "../Components/LivroEncontrado"

function ListaDeLivros() {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <p className="text-lg pb-3 pt-5">Resultados encontrados</p>

                < LivroEncontrado src="/src/assets/1984.jpg" titulo="1984" autor="George Orwell" />
            </div>
        </div>
    )
}

export default ListaDeLivros