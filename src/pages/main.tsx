import Navigation from "../components/service/Navigation";
import IntroCarousel from '../components/service/IntroCarousel';
import BrandLogo from "../components/service/BrandLogo";
import ServiceCarousel from "../components/service/ServiceCarousel";
import Search from "../components/service/Search";
import ServiceButton from "../components/service/ServiceButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function Service(){
    return(
        <main className="bg-black h-screen text-white">
            <section className="px-8 py-4">
                <div className="catch_phrase font-bold mb-4">
                    <p className="text-main text-xl">Three Steps</p>
                    <p className="text-lg">to Settle in Kroea</p>
                </div>
                <div className="content-container py-2 mb-4">
                    <IntroCarousel className="mb-2"></IntroCarousel>
                </div>
                <div className="search-container mb-8">
                    <Search/>
                </div>
                <div className="service-container">
                    <div className="service-collections flex justify-between">
                        <ServiceButton 
                            name="Cellphone" icon={<FontAwesomeIcon icon={faMobileScreenButton}/>} to="/cellphone"
                        />
                        <ServiceButton 
                            name="Banking" icon={<FontAwesomeIcon icon={faBuildingColumns}/>} to="/cellphone"
                        />
                        <ServiceButton 
                            name="ARC" icon={<FontAwesomeIcon icon={faFile}/>} to="/cellphone"
                        />
                    </div>
                </div>
            </section>
            <div className="navgiation-wrapper mb-20"></div>
        </main>
    )
}