import { ReactEventHandler } from "react"

export default function MainButton
(
    {text, clickHandler, className}:
    {text: string, clickHandler?: ReactEventHandler<HTMLButtonElement>, className?:string}
)
{
    return (
        <button 
            className={`py-4 px-8 bg-teritary text-main rounded-xl font-semibold hover:bg-teritary/75 focus:bg-teritary/50 transition-colors  ${className}`}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}