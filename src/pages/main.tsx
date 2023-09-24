import Navigation from "../components/service/Navigation";
import IntroCarousel from '../components/service/IntroCarousel';
import BrandLogo from "../components/service/BrandLogo";
import ServiceCarousel from "../components/service/ServiceCarousel";

export default function Service(){
    return(
        <main>
            <section className="px-8 py-4">
                <BrandLogo></BrandLogo>
                <div className="content-container py-2">
                    <h1 className="text-2xl mb-2">A.B.C Package</h1>
                    <div className="catchphrase text-xs text-slate-400 mb-2">
                        <p>Everything you need when you first come to Korea!</p>
                    </div>
                    <IntroCarousel className="mb-2"></IntroCarousel>
                </div>
                <div className="border-t-2 border-black mb-6"/>
                <div className="service-container">
                    <ServiceCarousel></ServiceCarousel>
                </div>
            </section>
            <div className="navgiation-wrapper mb-20"></div>
            <Navigation/>
        </main>
    )
}