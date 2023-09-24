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
        <nav className="nav-wrapper fixed bottom-0 py-4 w-full border-t border-slate-100 bg-white z-50">
            <ul className="w-full flex justify-evenly items-center">
                <li className="text-center text-2xl">
                    <Link to="/service"><FontAwesomeIcon icon={faHome}/></Link>
                </li>
                <li className="text-center text-2xl">
                    <button><FontAwesomeIcon icon={faCommentRegular}/></button>
                </li>
                <li className="slider text-4xl text-slate-500">
                    <button>
                        <FontAwesomeIcon icon={faPlusSquare}/>
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