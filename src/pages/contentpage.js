import React from "react";
import Calendar from "react-calendar";
import Calndr from "../Calendar/calendar";
import Todos from "../Todo_List/Todos.jsx"


export default function Content() {

    return (
        <div className='contentPage'> 
            <Todos/>
            <Calndr />
            
        </div>

    )
}