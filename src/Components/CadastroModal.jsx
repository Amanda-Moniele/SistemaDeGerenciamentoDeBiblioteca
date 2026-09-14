import { useState } from "react";
import BotaoMaior from "./BotaoMaior"
import Input from "./Input";
import { IoClose } from "react-icons/io5";

function CadastroModal({ setOpen }) {

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erro, setErro] = useState("")

    async function cadastrarUsuario() {
        try {
            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "POST",

                headers: {
                    "Content-type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    nome: nome,
                    senha: String(senha)
                })
            })

            const dados = await resposta.json()

            if (!resposta.ok) {
                setErro(dados.mensagem || "Não foi possível criar a conta")
                setMensagem("")
                return
            }

            setMensagem("Conta criada com sucesso")
            setErro('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className=" border-bege rounded-lg bg-offwhite w-180 p-5 flex flex-col items-center">
                <button onClick={() => { setOpen(false) }} className="flex justify-end w-full cursor-pointer"><IoClose className="text-3xl text-marromEscuro" /></button>
                < Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="seuemail@exemplo.com.br" />
                < Input value={nome} onChange={(e) => setNome(e.target.value)} label="Nome de usuário" type="text" placeholder="Amanda Moniele" />
                < Input value={senha} onChange={(e) => setSenha(e.target.value)} label="Senha" type="password" placeholder="......." />

                {mensagem && (
                    <p className="text-green-600 font-semibold mb-3">
                        {mensagem}
                    </p>
                )}

                {erro && (
                    <p className="text-red-600 font-semibold mb-3">
                        {erro}
                    </p>
                )}

                < BotaoMaior onClick={cadastrarUsuario} text='Criar conta' />
            </div>
        </div>
    )

}

export default CadastroModal