import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function IntroCarousel ({className}: {className?:string}){
    return (
        <Link to="/service/abc">
            <Swiper 
                className={`w-full ${className}`}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay:3000
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className="h- 150px] rounded-lg bg-slate-400"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[150px] rounded-lg bg-slate-400"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[150px] rounded-lg bg-slate-400"></div>
                </SwiperSlide>
            </Swiper>
        </Link>
    )
} 