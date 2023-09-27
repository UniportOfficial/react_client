import { HTMLAttributes, ReactHTMLElement, ReactNode, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Swiper Library
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

// Calendar Library
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './userinfo.css';

// Countries Data
// import * as countries from './country.json';
const countries = require('./country.json')



export default function Userinfo(){
    const [accepted, setAccepted] = useState(false);

    return <Survey/>
}

function Survey(){
    return (
        <Swiper
            className="h-screen"
            pagination={{
                el:".swiper-pagination"
            }}
            navigation={{
                prevEl:".navigation-prev",
                nextEl:".navigation-next"
            }}
            modules={[Pagination, Navigation]}
        >
            <div className="flex justify-center">
                <div className="w-[90%] flex px-6 py-2 justify-between items-center absolute top-[5%] rounded-lg bg-black text-white">
                    <PrevButton></PrevButton>
                    <div className="swiper-pagination flex items-center static"></div>
                    <button className="text-xs font-semibold">Skip</button>
                </div>
            </div>
            <SwiperSlide>
                <SlideCalendar
                    guide={
                        <div className="w-full text-lg font-bold text-center mb-6">
                            <p>Please enter your</p>
                            <p className="text-main">Date of Birth</p>
                        </div>
                    }
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideSelect
                    guide={
                        <div className="w-full text-lg font-bold text-center">
                            <p className="mb-4">Please select your <span className='text-main'>Nationality</span></p>
                            <p className="text-sm mb-4">
Please select the nationality shown 
in your passport, or select "Not listed" 
if you can't find your nationality 
within the listed options.
                            </p>
                        </div>
                    }
                    placeholder='Select your Nationality'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCustom
                    guide={
                        <div>
                            <div className="w-full text-lg font-bold text-center mb-4">
                                <p>Please enter</p>
                                <p>your <span className="text-main">Passport Number</span></p>
                            </div>
                            <div className="w-full text-sm text-center mb-4">
                                <p>
Please note that the information you fill in 
needs to be the same as the information 
in your passport.
                                </p>
                            </div>
                        </div>
                    }
                    placeholder="9 characters Passport Number"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCalendar
                    guide={
                        <div className="w-full text-lg font-bold text-center mb-6">
                            <p>Please enter your</p>
                            <p><span className="text-main">Date of Issue </span>of your passport</p>
                        </div>
                    }
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCalendar
                    guide={
                        <div className="w-full text-lg font-bold text-center mb-6">
                            <p>Please enter your</p>
                            <p><span className="text-main">Date of Expiry </span>of your passport</p>
                        </div>
                    }
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCustom
                    guide={
                        <div className="mb-6">
                            <div className="w-full text-lg font-bold text-center mb-6">
                                <p>Please enter your</p>
                                <p>your <span className="text-main">valid Address in Korea</span></p>
                            </div>
                            <div className="text-sm text-center">
                                <p>If you do not have a valid address in Korea yet, please enter “None”</p>
                            </div>
                        </div>
                    }
                    placeholder="Address in Korea"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCustom
                    guide={
                        <div className="mb-6">
                            <div className="w-full text-lg font-bold text-center mb-6">
                                <p>Please enter your</p>
                                <p>your <span className="text-main">Date of Expiry</span>Cellphone Number</p>
                            </div>
                            <div className="text-sm text-center">
                                <p>Please enter a valid cellphone number via which you can be contacted.</p>
                            </div>
                        </div>
                    }
                    placeholder="Address in Korea"
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCustom
                    guide={
                        <div className="mb-6">
                            <div className="w-full text-lg font-bold text-center mb-6">
                                <p>Please enter your</p>
                                <p><span className="text-main">Address in your Home Country </span></p>
                            </div>
                            <div className="text-sm text-center">
                                <p>Please enter your address in English</p>
                            </div>
                        </div>
                    }
                    placeholder="Address in your Home Country"
                />
            </SwiperSlide>
            <NextButton></NextButton>
        </Swiper>
    )
}

function SlideCustom({guide, placeholder, type}:{guide: ReactNode, placeholder: string, type?: string}){
    return (
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            {guide}
            <div className="w-full">
                <input 
                    className="w-full text-sm px-8 border-black border-b-2 py-4" 
                    placeholder={placeholder}
                    type={type ? type : 'text'}
                />
            </div>
        </div>
    )
}

function SlideCalendar({guide}:{guide: ReactNode}){
    return (
        <div className="w-full h-full mt-32 relative flex flex-col items-center">
            {guide}
            <Calendar locale="en"/>
        </div>
    )
}

function SlideSelect({guide, placeholder}:{guide: ReactNode, placeholder: string}){
    return(
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            {guide}
            <div className="w-full">
                <select
                    className="w-full text-sm px-8 border rounded-lg py-4" 
                    placeholder={placeholder}
                >
                    {countries.map((country:any)=>{
                        return (
                            <option key={country.name} value={country.code}>{country.name}</option>
                        )
                    })}
                </select>
                <span className="absolute right-[18%] mt-4"><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span>
            </div>
        </div>
    )
}

function PrevButton(){
    return(
        <div className="navigation-prev z-10">
            <button className="text-white"><FontAwesomeIcon icon={faArrowLeft}/></button>
        </div>
    )
}

function NextButton(){
    return (
        <div className="navigation-next absolute bottom-[5%] right-12 z-10">
            <button>Next</button>
        </div>
    )
}