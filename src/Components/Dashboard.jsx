function Dashboard ({texto}) {
    return (
        <div className="h-22 p-3 border-b border-bege w-full">
            <p className="mb-3 text-2xl font-bold">{texto}</p>
            <p className="mb-3 text-lg">Bem-Vindo, <span>Administrador</span>!</p>
        </div>
    )
}

export default Dashboard;