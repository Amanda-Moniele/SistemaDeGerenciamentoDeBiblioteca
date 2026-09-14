import { useState } from "react";
import BotaoMaior from "./BotaoMaior"
import Input from "./Input";
import { IoClose } from "react-icons/io5";

function CadastroModal({ setOpen, setMostrarToast }) {

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    async function cadastrarUsuario() {

        // email no formato padrão
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // não pode caracteres especiais e pode conter espaços
        const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        // mínimo de 8 caracteres, pelo menos 1 letra maiúscula, pelo menos 1 letra minúscula, pelo menos 1 caractere especial
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

        if (!nomeRegex.test(nome)) {
            alert("O nome deve conter apenas letras e espaços");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Digite um email válido");
            return;
        }

        if (!senhaRegex.test(senha)) {
            alert(
                "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial"
            );
            return;
        }

        try {
            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    nome: nome,
                    senha: senha
                })
            })

            const dados = await resposta.json()

            if (!resposta.ok) {
                alert(dados.mensagem || "Não foi possível criar a conta.")
                return
            }

            setOpen(false)

            setMostrarToast(true)

        } catch (error) {
            alert("Erro ao conectar com o servidor.")
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className=" border-bege rounded-lg bg-offwhite w-180 p-5 flex flex-col items-center">
                <button onClick={() => { setOpen(false) }} className="flex justify-end w-full cursor-pointer"><IoClose className="text-3xl text-marromEscuro" /></button>
                < Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="seuemail@exemplo.com.br" />
                < Input value={nome} onChange={(e) => setNome(e.target.value)} label="Nome de usuário" type="text" placeholder="Amanda Moniele" />
                < Input value={senha} onChange={(e) => setSenha(e.target.value)} label="Senha" type="password" placeholder="......." />
                < BotaoMaior onClick={cadastrarUsuario} text='Criar conta' />
            </div>
        </div>
    )

}

export default CadastroModal