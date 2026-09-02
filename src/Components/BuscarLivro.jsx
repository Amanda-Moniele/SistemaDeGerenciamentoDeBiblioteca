import { IoIosSearch } from "react-icons/io";
import Input from "./Input";

function BuscarLivro() {
    return (
        <div>
            <div>
                <p className="text-center text-2xl p-2">Adicionar livro</p>
            </div>

            <div>
                <p className="text-lg font-bold">1 - Pesquise o livro pela API</p>
                <span className="text-pretoClaro">Busque pelo título para encontrar o livro e importar os dados</span>
            </div>

            <div className="flex items-center pt-5">
                <div className="flex items-center border border-bege h-10 rounded-lg w-full">
                    < IoIosSearch className="text-2xl text-pretoClaro ml-2" />
                    <input type="text" placeholder="Digite o título" className="text-lg outline-none pl-3" />
                </div>

                <button className="flex items-center gap-1 text-lg bg-marromEscuro text-white h-10 w-30 rounded-lg ml-5 cursor-pointer pl-2">
                    < IoIosSearch className="text-2xl" />
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default BuscarLivro