import { ReactEventHandler } from "react"

export default function MainButton
(
    {text, clickHandler, className}:
    {text: string, clickHandler?: ReactEventHandler<HTMLButtonElement>, className?:string}
)
{
    return (
        <button 
            className={`py-4 px-8 bg-black text-main rounded-xl font-semibold ${className}`}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}