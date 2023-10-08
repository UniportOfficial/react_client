'use client'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faComment, faPlusSquare, faUser, faBars } from "@fortawesome/free-solid-svg-icons"
import { 
    faUser as faUserReuglar,
    faComment as faCommentRegular,
} from "@fortawesome/free-regular-svg-icons"

export default function Navigation(){
    return(
        <nav className="nav-wrapper fixed left-0 bottom-0 w-full py-4 bg-teritary z-50 rounded-tl-3xl rounded-tr-3xl text-white">
            <ul className="w-full flex justify-evenly items-center">
                <li className="text-center text-2xl">
                    <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>
                </li>
                <li className="text-center text-2xl">
                    <button><FontAwesomeIcon icon={faCommentRegular}/></button>
                </li>
                <li className="slider text-slate-500 text-main flex items-center">
                    <button className="text-center text-main text-xl font-bold bg-black px-2 pb-1 rounded-lg">
                        +
                    </button>
                </li>
                <li className="text-center text-2xl">
                    <button><FontAwesomeIcon icon={faUserReuglar}/></button>
                </li>
                <li className="text-center text-2xl">
                    <button><FontAwesomeIcon icon={faBars}/></button>
                </li>
            </ul>
        </nav>
    )
} 