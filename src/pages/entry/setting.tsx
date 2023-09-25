export default function Setting(){
    return (
        <main>
            <div className="upper">
                <div className="logo">
                    <img src="onlyLogo.png"/>
                </div>
                <p>Please choose a Language</p>
            </div>
            <div className="lower">
                <ul>
                    <li className="w-full">
                        <button className="relatvie py-2 px-4 w-full text-center">
                            <span className="flag absolute "><img src=""/></span>
                            <span>대한민국</span>
                        </button>
                    </li>
                </ul>
                <button>Get Started</button>
            </div>
        </main>
    )
}