function BotaoMaior ({text, onClick}) {
    return (
        <div>
            <button onClick={onClick} className="bg-marromEscuro h-12 w-80 rounded-lg text-xl text-offwhite cursor-pointer">{text}</button>
        </div>
    )
}

export default BotaoMaior