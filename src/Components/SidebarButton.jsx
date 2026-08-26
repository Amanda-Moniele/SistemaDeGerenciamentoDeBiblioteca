function SidebarButton ({ texto, children}) {
    return (
        <button className="flex hover:bg-marrom hover:text-marromClaro rounded-xl h-12 w-[80%] p-2">
            {children}
            <span className="text-lg pl-2">{texto}</span>
        </button>
    )
}

export default SidebarButton