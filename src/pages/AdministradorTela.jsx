import LogoutButton from "../Components/LogoutButton";
import Dashboard from "../Components/Dashboard";
import Cards from "../Components/Cards";
import Sidebar from "../Components/Sidebar";
import { LuBookCheck, LuBookPlus, LuBookX, LuBookText } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import EmprestadoButton from "../Components/StatusEmprestado"
import StatusAtrasado from "../Components/StatusAtrasado";

function AdministradorTela() {
    return (
        <div className="bg-offwhite w-full min-h-screen flex">
            < Sidebar />
            <div className="w-full flex flex-col items-center">
                <div className="w-full">
                    < Dashboard texto="Dasboard" />
                </div>

                <div className="flex w-full justify-evenly pt-5 gap-10">
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

                <div className="border border-bege w-380 h-170 rounded-lg mt-5 p-5">
                    <p className="text-lg font-bold pt-3 pb-3">Buscar empréstimo</p>
                    <div className="flex">
                        <input type="text" placeholder="Digite o email" className="w-200 border border-bege rounded-lg h-10 outline-none mb-5 pl-2" />
                        <CiSearch className="bg-marrom text-white h-10 w-30 rounded-lg ml-5 cursor-pointer" />
                    </div>

                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3">Livro</th>
                                <th className="text-left py-3">Email</th>
                                <th className="text-left py-3">Data de empréstimo</th>
                                <th className="text-left py-3">Data de devolução</th>
                                <th className="text-left py-3">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-4">Harry Potter</td>
                                <td className="py-4">amandamonielesilva02@gmail.com</td>
                                <td className="py-4">10/09/2026</td>
                                <td className="py-4">20/09/2026</td>
                                <td className="py-4">< EmprestadoButton /> </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="py-4">Senhor dos aneis</td>
                                <td className="py-4">amandamonielesilva02@gmail.com</td>
                                <td className="py-4">1/09/2026</td>
                                <td className="py-4">10/09/2026</td>
                                <td className="py-4"> <StatusAtrasado /> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdministradorTela