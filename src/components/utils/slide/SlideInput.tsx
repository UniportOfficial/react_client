import { ReactNode, ChangeEventHandler } from "react";

export default function SlideInput(
    {guide, placeholder, type, inputHandler} :
    {guide: ReactNode, placeholder: string, type?: string, inputHandler: ChangeEventHandler<HTMLInputElement>}){
    return (
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            {guide}
            <div className="w-full">
                <input 
                    className="w-full text-sm px-8 border-black border-b-2 py-4" 
                    placeholder={placeholder}
                    type={type ? type : 'text'}
                    onChange={inputHandler}
                />
            </div>
        </div>
    )
}