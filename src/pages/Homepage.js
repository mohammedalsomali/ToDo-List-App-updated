import React from "react";
import Navb from "./navbar";
import Content from "./contentpage";
import "./style.css";

export default function Homepage(props ){
    return (
        <div className="Container">
            <Navb />
            
            <Content />  
        </div>
        

    )
}