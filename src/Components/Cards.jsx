function Cards ({ cor, children, texto, quantidade }) {
    return (
       <div className="w-75 h-25 flex border border-bege  rounded-xl p-5">
            <div className={`${cor} h-15 w-15 rounded-full p-4 flex justify-center`}>
                {children}
            </div>

            <div className="pl-5">
                <p className="text-lg">{texto}</p>
                <span className="text-2xl font-bold">{quantidade}</span>
            </div>
       </div>
    )
}

export default Cards