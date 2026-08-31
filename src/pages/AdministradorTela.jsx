import LogoutButton from "../Components/LogoutButton";
import Dashboard from "../Components/Dashboard";
import Cards from "../Components/Cards";
import Sidebar from "../Components/Sidebar";
import { LuBookCheck, LuBookPlus, LuBookX, LuBookText } from "react-icons/lu";

function AdministradorTela() {
    return (
        <div className="bg-offwhite w-full min-h-screen flex">
            < Sidebar />
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