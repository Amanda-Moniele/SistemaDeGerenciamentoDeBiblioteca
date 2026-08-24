function BotaoMaior (props) {
    return (
        <div>
            <button className="bg-marromEscuro h-12 w-80 rounded-lg text-xl text-offwhite cursor-pointer"><span>{props.text}</span></button>
        </div>
    )
}

export default BotaoMaior