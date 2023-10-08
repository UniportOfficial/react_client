import { useState, useEffect, useRef, useReducer, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';

// Components
import SlideNextButtonWithIcon from '../../../components/utils/slide/SlideNextButtonWithIcon';
import SlidePrevButton from '../../../components/utils/slide/SlidePrevButton';
import SlideCustom from '../../../components/utils/slide/SlideCustom';
import SlideInput from '../../../components/utils/slide/SlideInput';
import SlideCalendar from '../../../components/utils/slide/SlideCalendar';
import SlideSelect from '../../../components/utils/slide/SlideSelect';

// Swiper Library
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

export default function CellphoneForm(){
    const nextButtonEl = useRef(null);
    const navigation = useNavigate();

    return(
        <main className="bg-black text-white">
            <Swiper
                className="h-screen"
                onReachEnd={()=>{
                    if (nextButtonEl.current !== null) {
                        let concreteButton = nextButtonEl.current as HTMLElement;
                        concreteButton.onclick = ()=>{navigation("/final")};
                        concreteButton.innerText = "Done";
                    } else {
                        throw new Error("Didn't create button.");
                    }
                }}
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
                    <div className="w-[90%] flex px-6 py-2 justify-between items-center absolute top-[5%] rounded-lg bg-teritary text-white">
                        <SlidePrevButton></SlidePrevButton>
                        <div className="swiper-pagination flex items-center static"></div>
                        <button className="navigation-next text-xs font-semibold z-10">Skip</button>
                    </div>
                </div>
                <SwiperSlide>
                    <SlideCustom>
                        <div className="text-center text-xl font-bold mb-4">
                            <p>Please select</p>
                            <p className="text-main">A Method to Receive</p>
                            <p>your prepaid SIM card</p>
                        </div>
                        <div className="text-center">
                            <p>If you choose to receive a prepaid </p>
                            <p>phone card at the airport, you can use </p>
                            <p>the Korean network and make calls directly</p>
                        </div>
                    </SlideCustom>
                </SwiperSlide>
                <SlideNextButtonWithIcon nextButtonEl={nextButtonEl}/>
            </Swiper>
        </main>
    )
}