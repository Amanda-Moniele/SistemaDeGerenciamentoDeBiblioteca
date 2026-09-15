import { useEffect } from "react";

function Toast({ mensagem, tipo, fechar }) {

    useEffect(() => {

        const timer = setTimeout(() => {
            fechar();
        }, 6000);

        return () => clearTimeout(timer);

    }, [fechar]);

    return (
        <div className="fixed top-5 right-5 z-50">

            <div
                className={`px-6 py-4 rounded-lg shadow-lg text-white ${
                    tipo === "sucesso"
                        ? "bg-green-600"
                        : "bg-red-600"
                }`}
            >
                {mensagem}
            </div>

        </div>
    );
}

export default Toast;

