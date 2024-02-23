import React, { useRef } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import Todos from "../Todo_List/Todos";



export default function Calndr(){

    

    return (
        <Calendar className="calendar" onClickDay={Todos}/>
    )
}
