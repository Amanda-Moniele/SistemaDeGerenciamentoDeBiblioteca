import Input from "../Components/Input"

function Emprestimo () {
    return (
       <div className="pt-5 bg-bege w-full h-full flex justify-center">
         <div className="w-200 p-5 bg-white rounded-lg h-190">
            <p className="text-2xl text-center font-bold">Registrar empréstimo</p>
            <div className="border-b border-b-bege">
                <p className="text-lg pt-5 pb-5 font-bold">Dados do usuário</p>
                <div>
                    < Input label="Nome completo" placeholder="nome da pessoa" />
                </div>

                 <div>
                    < Input label="Email" placeholder="email@exemplo.com" />
                </div>
            </div>

            <div className="h-50 border-b border-b-bege">
                <p className="text-lg pt-5 pb-5 font-bold">Dados do livro</p>
                <select>
                    <option required value="" disabled selected>Selecione um livro</option>
                    <option className="text-lg" value="">1984</option>
                </select>
                <div>
                    <span>Disponibilidade 1 de 3 disponível</span>
                </div>
            </div>

            <div>
                <p className="text-lg pt-5 pb-5 font-bold">Datas</p>

                <div>
                    <div className="flex pb-5 items-center">
                        <label className="text-lg font-bold pr-2">Data do empréstimo</label>

                        <div className="border border-bege h-10 rounded-lg flex justify-center">
                            <input className="pr-3 pl-3" type="date" />
                        </div>
                    </div>

                    <div className="flex  items-center">
                        <label className="text-lg font-bold pr-2">Data de devolução prevista</label>
                        
                        <div className="border border-bege h-10 rounded-lg flex justify-center">
                            <input className="pr-3 pl-3" type="date" name="" id="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-marrom text-white text-l rounded-lg h-10 w-30 mt-5 cursor-pointer">Salvar</button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Emprestimo