import { Link } from 'react-router-dom';

export default function SecondaryLink({text, to}: {text:string, to: string}){
    return (
        <Link to={to} className="py-4 px-8 bg-secondary rounded-xl font-semibold">{text}</Link>
    )
}