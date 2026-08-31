function LivroEncontrado({titulo, autor, src}) {
    return (
        <div className="flex justify-between items-center border border-bege p-5 rounded-lg hover:border-marrom hover:bg-marromClaro">
            <div className="flex">
                <img src={src} alt="" className="h-40 w-30 rounded-lg" />
                <div className="flex flex-col pl-5">
                    <span className="font-bold pb-2">{titulo}</span>
                    <span className="text-pretoClaro">{autor}</span>
                </div>
            </div>

            <div>
                <button className="bg-marromEscuro h-12 w-40 rounded-lg text-white p-2 text-lg cursor-pointer">Selecionar</button>
            </div>
        </div>
    )
}

export default LivroEncontrado