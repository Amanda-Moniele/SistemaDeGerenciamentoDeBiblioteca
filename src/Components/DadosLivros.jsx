import Input from "./Input"

function DadosLivros() {
    return (
        <div className="border border-bege w-200 rounded-lg p-5">
            <div>
                <p className="font-bold text-lg pt-3 pb-3">2 - Dados do livro selecionado</p>
                <span className="text-pretoClaro">Revise as informações importadas da api</span>
            </div>

            <div className="flex col pt-5">
                <div className="flex">
                    <img src="src/assets/1984.jpg" className="h-60 w-50 rounded-lg" />
                </div>

                <div className="pl-5">
                    <div className="flex gap-5">
                        < Input label="Título" />
                        < Input label="Autor" />
                    </div>

                    <div className="flex gap-5">
                        < Input label="Editora" />
                        < Input label="Ano de publicação" />
                    </div>

                    <div className="flex gap-5">
                        < Input label="Categoria" />
                        < Input label="ISBN" />
                    </div>
                </div>
            </div>

            <div>
                <p className="font-bold text-lg">3 - Dados da Biblioteca</p>
                <p className="text-pretoClaro">Preencha os dados específicos da sua biblioteca</p>

                <div>
                    <div className="flex pt-5 pb-5">
                        <p className="text-lg pr-3 ">Quantidade de exemplares:</p>
                        <input className="border border-marrom outline-none w-20 rounded-md" type="text" />
                    </div>

                    <div className="pb-3">
                        <label className="text-lg">
                            Localização:
                            <select className="text-white bg-marrom rounded-lg ml-2">
                                <option value="" disabled>Escolha uma estante</option>
                                <option value="someOption">Estante A - prateleira 2 </option>
                                <option value="otherOption">Estante B - prateleira 3 </option>
                                <option value="otherOption">Estante C - prateleira 4 </option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="text-lg">Sinopse</label>
                        <textarea className="w-full h-70  border border-bege outline-none rounded-lg text-base p-3">

                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DadosLivros