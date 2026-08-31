import { IoIosSearch } from "react-icons/io";
import LogoSidebar from "../Components/LogoSidebar"
import SidebarButton from "../Components/SidebarButton"
import LogoutButton from "../Components/LogoutButton";
import Cards from "../Components/Cards";
import { FaBookOpen, FaBookMedical, FaUser, FaHome } from "react-icons/fa";
import { LuBookCheck, LuBookPlus, LuBookX, LuBookText } from "react-icons/lu";
import LivroEncontrado from "../Components/LivroEncontrado";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input";

function AdicionarLivro() {
    return (
        <div className="flex w-full">
           <div className="left-0 top-0 h-screen">
                < Sidebar/>
           </div>

            <div className="flex m-5 gap-5">
                <div className="border border-bege pl-5 pr-5 pt-5 rounded-lg w-180">
                 <div>
                    <p className="text-center text-2xl p-2">Adicionar livro</p>
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

                    <button className="flex items-center gap-1 text-lg bg-marromEscuro text-white h-10 w-30 rounded-lg ml-5 cursor-pointer pl-2">
                        < IoIosSearch className="text-2xl" />
                        Buscar
                    </button>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-lg pb-3 pt-5">Resultados encontrados</p>

                    < LivroEncontrado src="/src/assets/1984.jpg" titulo="1984" autor="George Orwell" />
                    < LivroEncontrado src="/src/assets/revolucaodosbichos.jpg" titulo="Revolução dos bichos" autor="George Orwell" />
                    < LivroEncontrado src="/src/assets/hamlet.jpg" titulo="Hamlet" autor="Wiliam Shakespeare" />
                </div>
            </div>

            <div className="border border-bege w-180 rounded-lg">
                <div>
                    <p>2 - Dados do livro selecionado</p>
                    <span>Revise as informações importadas da api</span>
                </div>

               
            </div>
            </div>
        </div>
    )
}

export default AdicionarLivro