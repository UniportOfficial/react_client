import { ReactNode } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function SlideCalendar({guide, selectDate}:{guide: ReactNode, selectDate: (value:any, event:any)=>void}){
    return (
        <div className="w-full h-full mt-32 relative flex flex-col items-center">
            {guide}
            <Calendar locale="en" onChange={selectDate}/>
        </div>
    )
}