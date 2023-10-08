import { MutableRefObject } from "react"

export default function SlideNextButton({nextButtonEl} : {nextButtonEl: MutableRefObject<any>}){
    return (
        <div 
            className="navigation-next rounded-lg absolute bottom-[5%] right-12 z-10 hover:bg-slate-300 hover:text-white transition-colors"
        >
            <button className="px-4 py-2" ref={nextButtonEl}>Next</button>
        </div>
    )
}