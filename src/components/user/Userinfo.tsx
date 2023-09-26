import { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './userinfo.css';

// Swiper Library
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Countries Data
// import * as countries from './country.json';
const countries = require('./country.json')

export default function Userinfo(){
    const [accepted, setAccepted] = useState(false);

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
                <InnerSlide
                    guide="What is your full name?"
                    placeholder='Please enter your name.'
                />
            </SwiperSlide>
            <SwiperSlide>
                <InnerSlideSelect
                    guide="Where are you from?"
                    placeholder='Please select your country'
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full px-12 relative flex flex-col justify-center items-center text-slate-400">
                    <p className="mb-3">유니포트에 오신걸 환영합니다!</p>
                    <p>Welcome to Uni-port!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full px-12 relative flex flex-col justify-center items-center text-slate-400">
                    <p className="">Uniting the World, Embracing Korea</p>
                    <p className="mb-3">Where Diversity Finds Joy</p>
                    <p className="">We help foreigners</p>
                    <p className="mb-3">get the best experience in Korea</p>
                    <p className="mb-3">Want to learn more about uni-port?</p>
                </div>
            </SwiperSlide>
            <NextButton></NextButton>
        </Swiper>
    )
}

function InnerSlide({guide, placeholder, type}:{guide: string, placeholder: string, type?: string}){
    return (
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            <div className="w-full">
                <input 
                    className="w-full text-sm px-8 border rounded-lg py-4" 
                    placeholder={placeholder}
                    type={type ? type : 'text'}
                />
                <span className="absolute top-[50%] right-[20%] -translate-y-[50%]"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
            </div>
            <p className="absolute top-[30%] text-lg text-slate-300">{guide}</p>
        </div>
    )
}

function InnerSlideSelect({guide, placeholder}:{guide: string, placeholder: string}){
    return(
        <div className="w-full h-full px-12 relative flex flex-col justify-center items-center">
            <div className="w-full">
                <p className="absolute top-[42%] text-sm text-salte-300">{placeholder}</p>
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
                <span className="absolute top-[50%] right-[20%] -translate-y-[50%]"><FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></span>
            </div>
            <p className="absolute top-[30%] text-lg text-slate-300">{guide}</p>
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