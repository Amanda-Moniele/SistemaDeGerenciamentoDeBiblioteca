import { IoIosSearch } from "react-icons/io";
import LogoSidebar from "../Components/LogoSidebar"
import SidebarButton from "../Components/SidebarButton"
import LogoutButton from "../Components/LogoutButton";
import Cards from "../Components/Cards";
import { FaBookOpen, FaBookMedical, FaUser, FaHome } from "react-icons/fa";
import { LuBookCheck, LuBookPlus, LuBookX, LuBookText } from "react-icons/lu";
import LivroEncontrado from "../Components/LivroEncontrado";

function AdicionarLivro() {
    return (
        <div className="flex">
           

            <div className="w-200 border border-bege pl-5 pr-5 pt-5 ml-10">
                 <div>
                    <p className="text-center text-2xl">Adicionar livro</p>
                </div>

                <div>
                    <p className="text-lg">1 - Pesquise o livro pela API</p>
                    <span className="text-pretoClaro">Busque pelo título para encontrar o livro e importar os dados</span>
                </div>

                <div className="flex items-center pt-5">
                    <div className="flex items-center border border-bege h-10 rounded-lg w-full">
                        < IoIosSearch className="text-2xl text-pretoClaro ml-2" />
                        <input type="text" placeholder="Digite o título" className="text-lg outline-none pl-3" />
                    </div>

                    <button className="flex items-center gap-1 text-lg bg-marromEscuro text-white h-10 w-30 rounded-lg ml-5 cursor-pointer">
                        < IoIosSearch className="text-2xl" />
                        Buscar
                    </button>
                </div>

                <div>
                    <p className="text-lg pt-5 pb-5">Resultados encontrados</p>

                    < LivroEncontrado />
                </div>
            </div>
        </div>
    )
}

export default AdicionarLivro