function Sidebar() {
    <div>
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
    </div>
}

export default Sidebar