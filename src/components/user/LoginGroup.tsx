import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faWeixin } from "@fortawesome/free-brands-svg-icons"

export default function LoginGroup(){
    return (
        <div className="login-group flex justify-between px-4 pt-8">
            <button className="icon-wrapper text-4xl"><FontAwesomeIcon icon={faWeixin}></FontAwesomeIcon></button>
            <button className="icon-wrapper text-4xl"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
            <button className="icon-wrapper text-4xl"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></button>
            <button className="icon-wrapper text-4xl"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></button>
        </div>
    )
}