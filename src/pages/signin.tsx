import { ChangeEvent, ReactEventHandler, useState } from 'react';
import { Link } from "react-router-dom";

// context, user state
import { useDispatch } from 'react-redux';
import { setAccessToken, setUser } from '../features/user';

import LoginGroup from "../components/user/LoginGroup";
import { signin } from '../apis/auth';

export default function Signin({setStateLogin}:{setStateLogin:Function}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const changeUsername = (e: ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value);
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
    }

    const submitSignin = async ()=>{
        try {
            const result = await signin(username, password);
            dispatch( setAccessToken(result.accessToken) );
            dispatch( setUser(result.user) );
            setStateLogin();

            console.log(result);
        } catch(err){
            console.log(err);
        }
    }

    return(
        <section className="px-8">
            <div className="brand-logo"><img src="logo.png"/></div>
            <div className="form"
                onKeyDown={(e)=>{
                    if (e.code === 'Enter') submitSignin();
                }}
            >
                <div className="input-group w-full my-6">
                    <input 
                        className="w-full border border-black rounded-lg text-xs px-4 py-3"
                        placeholder="E-mail"
                        onChange={changeUsername}
                        value={username}
                    />
                </div>
                <div className="input-group w-full">
                    <input
                        className="w-full border border-black rounded-lg text-xs px-4 py-3"
                        placeholder="Password"
                        type="password"
                        onChange={changePassword}
                        value={password}
                    />
                </div>
            </div>
            <a className="block w-full text-sm text-center my-4 text-slate-300">Find your ID &  Password</a>
            <button 
                className="w-full py-3 rounded-md text-main font-semibold bg-black"
                onClick={submitSignin}
            >
                Login
            </button>
            <div className="notice-group flex flex-col justify-center items-center py-16">
                <p className="">Don't have an account yet?</p>
                <Link to='/signup' className="font-semibold">Sign up</Link>
            </div>
            <div className="boundary border-t border-black">
                <div className="relative w-full flex justify-center transition">
                    <span className="absolute -top-[12px] bg-white">&nbsp; Or &nbsp;</span>
                </div>
            </div>
            <div className="py-4">
                <LoginGroup></LoginGroup>
            </div>
        </section>
    )
}