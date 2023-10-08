import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import './introCarousel.css';

export default function IntroCarousel ({className}: {className?:string}){
    return (
        <div>
            <Swiper 
                className={`w-full ${className}`}
                spaceBetween={10}
                loop={true}
                pagination={{
                    el: ".intro-carousel-pagination"
                }}
                autoplay={{
                    delay:3000
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <div className="h-[300px] rounded-2xl bg-teritary p-8">
                        <h2 className="text-main text-lg font-bold">Step 1</h2>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-[100px]" src='mobile.png'/>
                            <div className="text-center font-semibold">
                                <p>Get your</p>
                                <p className="mb-4"><span className="text-main">Phone Number </span>ready</p>
                            </div>
                            <p className="text-sm">It only takes you <span className="text-green">5 minutes</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] rounded-2xl bg-teritary"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] rounded-2xl bg-teritary"></div>
                </SwiperSlide>
            </Swiper>
            <div className='intro-carousel-pagination text-center'></div>
        </div>
    )
} 