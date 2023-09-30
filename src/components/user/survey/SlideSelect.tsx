import { ReactNode, ReactEventHandler } from "react";

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';

// Countries Data
const countries = require('../country.json')

export default function SlideSelect
(
    {guide, placeholder, selectHandler} :
    {guide: ReactNode, placeholder: string, selectHandler: ReactEventHandler<HTMLSelectElement> }
)
{
    return(
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            {guide}
            <div className="w-full">
                <select
                    className="w-full text-sm px-8 border rounded-lg py-4" 
                    placeholder={placeholder}
                    onChange={selectHandler}
                >
                    {countries.map((country:any)=>{
                        return (
                            <option key={country.name} value={country.code}>{country.name}</option>
                        )
                    })}
                </select>
                <span className="absolute right-[18%] mt-4"><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span>
            </div>
        </div>
    )
}