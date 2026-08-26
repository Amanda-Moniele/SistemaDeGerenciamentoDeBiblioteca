import { HiLogout } from "react-icons/hi";

function LogoutButton () {
    return (
        <div>
            <HiLogout className="text-marromEscuro text-3xl" />
            <button className="text-marromEscuro text-2xl">Sair</button>
        </div> 
    )
}

export default LogoutButton