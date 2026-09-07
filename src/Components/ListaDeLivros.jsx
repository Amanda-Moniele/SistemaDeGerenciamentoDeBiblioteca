import LivroEncontrado from "./LivroEncontrado"

function ListaDeLivros({ livros }) {
    return (
        <div className="mt-5 overflow-auto">
            <div className="flex flex-col gap-3">

                {livros.map((livro) => (
                    <LivroEncontrado
                        key={livro.key}
                        titulo={livro.title}
                        autor={livro.author_name?.[0]}
                        src={
                            livro.cover_i
                                ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
                                : "/sem-capa.jpg"
                        }
                    />
                ))}

            </div>
        </div>
    )
}

export default ListaDeLivros
