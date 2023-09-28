import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import UserInfo from '../../components/user/Survey';

export default function Register(){
    return (
        <main className="w-full">
            <UserInfo></UserInfo>
        </main>
    )
}