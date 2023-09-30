import { MutableRefObject } from "react"

export default function SlideNextButton({nextButtonEl} : {nextButtonEl: MutableRefObject<any>}){
    return (
        <div className="navigation-next absolute bottom-[5%] right-12 z-10">
            <button ref={nextButtonEl}>Next</button>
        </div>
    )
}