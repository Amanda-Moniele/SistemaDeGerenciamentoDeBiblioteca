import LogoSidebar from "../Components/LogoSidebar"
import SidebarButton from "../Components/SidebarButton"
import LogoutButton from "../Components/LogoutButton";
import Dashboard from "../Components/Dashboard";
import Cards from "../Components/Cards";
import { FaBookOpen, FaBookMedical, FaUser, FaHome } from "react-icons/fa";
import { LuBookCheck, LuBookPlus, LuBookX, LuBookText } from "react-icons/lu";

function AdministradorTela() {
    return (
        <div className="bg-offwhite w-full min-h-screen flex">
            <div className="bg-marromClaro w-86 h-screen">
                <div className="p-5">
                    < LogoSidebar />
                </div>

                <div className="flex flex-col gap-10 items-center">
                    < SidebarButton texto="Dashboard">
                        <FaHome className="text-2xl"></FaHome>
                    </SidebarButton>

                    < SidebarButton texto="Catálogo de Livros">
                        <FaBookOpen className="text-2xl"></FaBookOpen>
                    </SidebarButton>

                    < SidebarButton texto="Adicionar Livro">
                        <FaBookOpen className="text-2xl"></FaBookOpen>
                    </SidebarButton>

                    < SidebarButton texto="Registrar empréstimo">
                        <FaBookMedical className="text-2xl"></FaBookMedical>
                    </SidebarButton>

                    < SidebarButton texto="Usuários">
                        <FaUser className="text-2xl"></FaUser>
                    </SidebarButton>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full">
                    < Dashboard />
                </div>

              <div className="flex justify-evenly pt-5">
                    < Cards cor="bg-marrom" texto="Livros cadastrados" quantidade="255">
                        <LuBookText className="text-2xl text-white" />
                    </Cards>

                    < Cards cor="bg-emerald-500" texto="Empréstimos ativos" quantidade="25">
                        <LuBookCheck className="text-2xl text-white" />
                    </Cards>

                    < Cards cor="bg-red-500" texto="Atrasados" quantidade="5">
                        <LuBookX className="text-2xl text-white" />
                    </Cards>

                     < Cards cor="bg-emerald-500" texto="Renovações" quantidade="2">
                       <LuBookPlus className="text-2xl text-white" />
                    </Cards>
              </div>
            </div>
        </div>
    )
}

export default AdministradorTela