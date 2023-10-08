import BrandLogo from "../../components/service/BrandLogo";
import MainLink from "../../components/utils/buttons/MainLink";

export default function Cellphone(){
    return (
        <main className="bg-black h-screen px-8 py-4 text-white">
            <BrandLogo/>
            <div className="catch-phrase font-bold">
                <h1 className="text-xl text-main">Cellphone Service</h1>
                <p className="text-lg">to Settle in Korea</p>
            </div>
            <section>
                <div className="px-4 py-8 mb-8 bg-teritary rounded-2xl flex flex-col justify-center items-center">
                    <img className="mb-4" src="mobile.png"/>
                    <h1 className="mb-4 font-bold text-xl text-main">Cellphone Service</h1>
                    <p>Uniport's Cellphone Services</p>
                    <p>will provide you with</p>
                    <p><span className="text-green">the fastest and easiest way</span> to</p>
                    <p>get prepaid SIM card</p>
                    <p>in Korea.</p>
                </div>
                <div className="px-4 py-8 bg-teritary rounded-2xl flex flex-col justify-center items-center">
                    <div className="mb-4 text-center">
                        <p>For your enjoyable and comportable</p>
                        <p>experience in Korea</p>
                    </div>
                    <div className="mb-4 text-center text-main">
                        <p>Please follow our instructions to purchase</p>
                        <p>a prepaid sim card</p>
                    </div>
                    <MainLink text='Get Started' to='/'/>
                </div>
            </section>
        </main>
    )
}