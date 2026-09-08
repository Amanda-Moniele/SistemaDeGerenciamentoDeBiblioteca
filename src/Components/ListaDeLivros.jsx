import LivroEncontrado from "./LivroEncontrado"

function ListaDeLivros({ livros, selecionarLivro }) {
    return (
        <div className="mt-5 overflow-auto">
            <div className="flex flex-col gap-3">

                {livros.map((livro) => (
                    <LivroEncontrado
                        key={livro.key}
                        livro={livro}
                        titulo={livro.title}
                        autor={livro.author_name?.[0]}
                        src={
                            livro.cover_i
                                ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
                                : "/sem-capa.jpg"
                        }
                        selecionarLivro={selecionarLivro}
                    />
                ))}

            </div>
        </div>
    )
}

export default ListaDeLivros
