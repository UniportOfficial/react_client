import MainButton from "../../components/utils/buttons/MainButton";
import SecondaryButton from "../../components/utils/buttons/SecondaryButton";


export default function Final(){
    return (
        <main className="flex flex-col h-screen justify-evenly">
            <div className="w-full px-12 relative flex flex-col justify-center items-center">
                <div className='mb-4'>
                    <img src='onlyLogo.png'/>
                </div>
                <p className="text-xl font-semibold">Welcome to <span className="text-main">UNIPORT</span></p>
            </div>
            <div className="w-full px-12 relative flex flex-col justify-center items-center">
                <p className="">Uniting the World,</p>
                <p className="">Embracing Korea</p>
                <p className="mb-3">Where Diversity Finds Joy</p>
                <p className="">We help foreigners</p>
                <p className="mb-3">get the <span className="text-main">best</span> experience in Korea</p>
            </div>
            <div className="text-center">
                <p className="mb-4">Want to learn more about Uniport?</p>
                <div className="flex justify-evenly">
                    <SecondaryButton text='Maybe Later'/>
                    <MainButton text='Yes, Please'/>
                </div>
            </div>
        </main>
    )
}