import { useState, useEffect, useRef, useReducer, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';

// Components
import SlideNextButton from './survey/SlideNextButton';
import SlidePrevButton from './survey/SlidePrevButton';
import SlideCustom from './survey/SlideCustom';
import SlideCalendar from './survey/SlideCalendar';
import SlideSelect from './survey/SlideSelect';

// Swiper Library
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

import './survey.css';

interface userinfoType {
    birth? : Date | null;
    nationality?: string | null;
    passport_number?: string | null;
    passport_issued_date?: Date | null;
    passport_expire_date?: Date | null;
    address_local?: string | null;
    phonenumber?: string | null;
    address_home_country?: string | null;
}

interface actionType {
    type: string;
    userinfo: userinfoType;
}

const initUserinfo: userinfoType = {
    birth: null,
    nationality: null,
    passport_number: null,
    passport_issued_date: null,
    passport_expire_date: null,
    address_local: null,
    phonenumber: null,
    address_home_country: null,
}

function userinfoReducer(state: userinfoType, action: actionType) : userinfoType {
    let newState = state;
    switch (action.type) {
        case 'birth':
            newState = {
                ...state, birth: action.userinfo.birth
            };
            return newState;
        case 'nationality':
            newState = {
                ...state, nationality: action.userinfo.nationality
            };
            return newState;
        case 'passport_number':
            newState = {
                ...state, passport_number: action.userinfo.passport_number
            };
            return newState;
        case 'issued_date':
            newState = {
                ...state, passport_issued_date: action.userinfo.passport_issued_date
            };
            return newState;
        case 'expire_date':
            newState = {
                ...state, passport_expire_date: action.userinfo.passport_expire_date
            };
            return newState;
        case 'address_local':
            newState = {
                ...state, address_local: action.userinfo.address_local
            };
            return newState;
        case 'phonenumber':
            newState = {
                ...state, phonenumber: action.userinfo.phonenumber
            };
            return newState;
        case 'address_home_country':
            newState = {
                ...state, address_home_country: action.userinfo.address_home_country
            };
            return newState
        default: return state;
    }
}

export default function Survey(){
    const [accepted, setAccepted] = useState(false);
    const [userinfo, updateUserinfo] = useReducer(userinfoReducer, initUserinfo)
    
    useEffect(()=>{
        console.log(userinfo);
    }, [userinfo])

    return <Body updateUserInfo={updateUserinfo}/>
}

function Body({updateUserInfo}: {updateUserInfo: Dispatch<actionType>}){ 
    const nextButtonEl = useRef(null);
    const navigation = useNavigate();

    return (
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
                <div className="w-[90%] flex px-6 py-2 justify-between items-center absolute top-[5%] rounded-lg bg-black text-white">
                    <SlidePrevButton></SlidePrevButton>
                    <div className="swiper-pagination flex items-center static"></div>
                    <button className="navigation-next text-xs font-semibold z-10">Skip</button>
                </div>
            </div>
            <SwiperSlide>
                <SlideCalendar
                    selectDate={(v,e)=>{updateUserInfo({type: "birth", userinfo: {birth: v === null ? null : v }})}}
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
                    selectHandler={(e)=>{
                        updateUserInfo({
                            type: "nationality", 
                            userinfo: {nationality: e.currentTarget.value === null ? null : e.currentTarget.value}
                        })
                    }}
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
                    inputHandler={(e)=>{
                        updateUserInfo({
                            type: "passport_number", 
                            userinfo: {passport_number: e.target.value}
                        })
                    }}
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
                    selectDate={(v, e)=>{updateUserInfo({type: "issued_date", userinfo: {passport_issued_date: v}})}}
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
                    selectDate={(v, e)=>{updateUserInfo({type: "expire_date", userinfo: {passport_expire_date: v}})}}
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
                    inputHandler={(e)=>{
                        updateUserInfo({
                            type: "address_local", 
                            userinfo: {address_local: e.target.value}
                        })
                    }}
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
                    inputHandler={(e)=>{
                        updateUserInfo({
                            type: "phonenumber", 
                            userinfo: {phonenumber: e.target.value}
                        })
                    }}
                    guide={
                        <div className="mb-6">
                            <div className="w-full text-lg font-bold text-center mb-6">
                                <p>Please enter your</p>
                                <p>your <span className="text-main">Cellphone Number</span></p>
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
                    inputHandler={(e)=>{
                        updateUserInfo({
                            type: "address_home_country", 
                            userinfo: {address_home_country: e.target.value}
                        })
                    }}
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
            <SlideNextButton nextButtonEl={nextButtonEl}/>
        </Swiper>
    )
}

