import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SlidePrevButton(){
    return(
        <div className="navigation-prev z-10">
            <button className="text-white"><FontAwesomeIcon icon={faArrowLeft}/></button>
        </div>
    )
}