import { ReactEventHandler } from "react"

export default function MainButton
(
    {text, clickHandler, className}:
    {text: string, clickHandler?: ReactEventHandler<HTMLButtonElement>, className?:string}
)
{
    return (
        <button 
            className={`py-4 px-8 bg-black text-main rounded-xl font-semibold hover:bg-black/75 focus:bg-black/50 transition-colors  ${className}`}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}