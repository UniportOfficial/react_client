import MainButton from "../../components/utils/buttons/MainButton";

export default function Welcome(){
    return(
        <main className="h-screen flex flex-col justify-evenly items-center">
            <div className='text-2xl'>
                <h1 className='font-bold'>Welcome to <span className='text-main'>UNIPORT</span></h1>
            </div>
            <div className='text text-center'>
                <p>Here are few quick questions</p>
                <p>to get you started with <span className="font-bold">Uniport</span></p>
            </div>
            <div className="flex flex-col items-center">
                <MainButton className="mb-2" text="Get Started"/>
                <small className="text-xs">I'll save that for another time.</small>
            </div>
        </main>
    )
}