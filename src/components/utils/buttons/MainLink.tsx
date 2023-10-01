import { Link } from "react-router-dom";

export default function MainLink({text, to, className}:{text: string, to:string, className?:string}){
    return (
        <Link to={to} className={`py-4 px-8 bg-black text-main rounded-xl font-semibold ${className}`}>{text}</Link>
    )
}