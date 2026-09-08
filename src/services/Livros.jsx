export async function buscarLivros(titulo, pagina) {

    const resposta = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}&page=${pagina}&limit=10`
    )

    if (!resposta.ok) {
        throw new Error("Erro ao buscar livros")
    }

    const dados = await resposta.json()

    return dados
}