import { MutableRefObject } from "react"

export default function SlideNextButtonWithIcon({nextButtonEl} : {nextButtonEl: MutableRefObject<any>}){
    return (
        <div 
            className="navigation-next bg-teritarty rounded-lg z-10 hover:bg-slate-300 hover:text-white transition-colors"
        >
            <button className="px-4 py-2" ref={nextButtonEl}>Next</button>
        </div>
    )
}