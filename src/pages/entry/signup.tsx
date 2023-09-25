import { 
    ReactNode, 
    useState, 
    ChangeEvent, 
    ChangeEventHandler, 
} from "react";
import { Link } from 'react-router-dom';

export default function Page(){
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordToConfirm, setPasswordToConfirm] = useState("");

    const inputHandler= (setState:Function) : ChangeEventHandler<HTMLInputElement> =>{
        return function(event: ChangeEvent<HTMLInputElement>){
            setState(event.target.value);
        }
    }

    return (
        <main>
            <section className="px-8 mb-8">
                <h1 className="text-2xl font-bold text-center py-8">Sign up</h1>
                <Input 
                    value={email}
                    placeholder="E-mail"
                    inputHandler={inputHandler(setEmail)}
                >
                    <button className="bg-teritary border-black border rounded-md px-4 text-xs text-white font-semibold ">Verify</button>
                </Input>
                <Input 
                    value={password}
                    placeholder="Password"
                    inputHandler={inputHandler(setPassword)}
                    type="password"
                />
                <Input 
                    value={passwordToConfirm}
                    placeholder="Confirm Password"
                    inputHandler={inputHandler(setPasswordToConfirm)}
                    type="password"
                />
                <Input 
                    value={firstname}
                    placeholder="First name"
                    inputHandler={inputHandler(setFirstname)}
                />
                <Input 
                    value={lastname}
                    placeholder="Last name"
                    inputHandler={inputHandler(setLastname)}
                />
                <div className="textarea-group mb-8">
                    <h2 className="notice-title mb-2 text-xs">Terms and Conditions</h2>
                    <textarea className="rounded-md w-full" rows={8} disabled>
                    </textarea>
                    <label className="text-[0.675rem] flex items-center">
                        <input className="mr-2" type="checkbox"></input>
                        I have read and agree to the user agreement.
                    </label>
                </div>
                <div className="textarea-group mb-8">
                    <h2 className="notice-title mb-2 text-xs">Privacy Policy</h2>
                    <textarea className="rounded-md w-full" rows={8} disabled>
                    </textarea>
                    <label className="text-[0.675rem] flex items-center">
                        <input className="mr-2" type="checkbox"></input>
                        I have read and agree to the Privacy Policy.
                    </label>
                </div>
                <button className="w-full rounded-md py-4 mb-8 bg-black text-sm font-bold text-main">Join</button>
                <div className="guide-signin text-sm flex justify-between">
                    <p>Do you have an account already?</p>
                    <Link className="text-blue-500" to="/">Login</Link>
                </div>
            </section>
        </main>
    )
}

function Input(
    {children, notice, placeholder, value, inputHandler, type} 
    : {
        children?: ReactNode, 
        notice?: string,
        placeholder?: string, 
        value: string|number, 
        inputHandler: ChangeEventHandler<HTMLInputElement>, 
        type?: string
    }
)
{
    return (
        <div className="relative mb-8">
            <div className="input-group flex justify-between gap-x-2 h-[40px]">
                <input
                    className="bg-secondary px-6 py-2 rounded-md w-full text-xs" 
                    placeholder={placeholder}
                    value={value}
                    onChange={inputHandler}
                    type={type ? type : 'text'}
                />
                {children}
            </div>
            {notice? (<p className="absolute text-xs text-slate-400 pt-1">{notice}</p>): null}
        </div>
    );
}