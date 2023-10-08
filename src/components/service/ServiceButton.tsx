import { Link } from "react-router-dom";
import { ReactNode } from "react";

export default function ServiceButton({icon, name, to}: {icon: ReactNode, name: string, to: string}){
    return (
        <Link className="mb-4" to={to}>
            <button className="w-[80px] h-[80px] bg-main rounded-2xl flex justify-center items-center mb-2 text-black text-4xl">
                {icon}
            </button>
            <p className="text-center text-sm">{name}</p>
        </Link>
    )
}