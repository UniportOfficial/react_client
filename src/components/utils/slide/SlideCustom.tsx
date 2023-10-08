import { ReactNode} from "react";

export default function SlideCustom({children}: {children:ReactNode}){
    return (
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            {children}
        </div>
    )
}