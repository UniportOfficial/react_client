import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Search(){
    return (
        <div className="search-section relative">
            <FontAwesomeIcon className="absolute text-sm top-[32%] left-[6%]" icon={faMagnifyingGlass} />
            <input className="w-full rounded-2xl pl-12 pr-4 py-1 bg-teritary text-white" placeholder="Search"/>
        </div>
    )
}