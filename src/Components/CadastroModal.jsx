import BotaoMaior from "./BotaoMaior"
import Input from "./Input";
import { IoClose } from "react-icons/io5";

function CadastroModal ({ setOpen}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className=" border-bege rounded-lg bg-offwhite w-180 p-5 flex flex-col items-center">
            <button onClick={() => {setOpen(false)}} className="flex justify-end w-full cursor-pointer"><IoClose className="text-3xl text-marromEscuro" /></button>
            < Input label="Email" type="email" placeholder="seuemail@exemplo.com.br" />
            < Input label="Nome de usuário" type="text" placeholder="Amanda Moniele" />
            < Input label="Senha" type="password" placeholder="......." />
            < BotaoMaior text='Criar conta' />
        </div>
        </div>
    )
   
}

export default CadastroModal