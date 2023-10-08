import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigation = useNavigate();

    const backClickHandler = ()=>{
        navigation(-1);
    }

    return(
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2">404</h1>
            <p className="mb-2">Not Found Pages.</p>
            <button className="text-blue-700" onClick={backClickHandler}>Go back</button>
        </main>
    )
}