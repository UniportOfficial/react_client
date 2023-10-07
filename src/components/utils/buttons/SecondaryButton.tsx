import { ReactEventHandler } from "react";

export default function SecondaryButton({text, clickHandler}: {text:string, clickHandler?: ReactEventHandler}){
    return (
        <button 
            className="py-4 px-8 bg-secondary rounded-xl font-semibold -hover:bg-secondary/50 focus:bg-secondary/25 transition-colors"
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}