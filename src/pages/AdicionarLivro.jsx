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
                </div>
            </div>

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
                            < Input label="Autor"/>
                        </div>

                         <div className="flex gap-5">
                            < Input label="Editora"  />
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
                                <option value="" disabled selected>Escolha uma estante</option>
                                <option value="someOption">Estante A - prateleira 2 </option>
                                <option value="otherOption">Estante B - prateleira 3 </option>
                                <option value="otherOption">Estante C - prateleira 4 </option>
                            </select>
                        </label>
                       </div>

                       <div>
                         <label className="text-lg">Descrição</label>
                        <textarea className="w-full h-70  border border-bege outline-none rounded-lg text-base p-3">

                        </textarea>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdicionarLivro