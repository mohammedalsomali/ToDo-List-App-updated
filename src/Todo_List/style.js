import React from "react";
import jQuery from "jquery";
import Calendar from "react-calendar";


const content = $(".react-calendar__tile abbr").text();

    if (content == "1") {
        console.log(content);
        $(".react-calendar__tile").css("color", "#ffffff");
    }
   if (content == "2") {

        $(".react-calendar__tile").css("color", "#ccc");
    }
   if (content == "3") {

        $(".react-calendar__tile").css("color", "#000");
    }


export default content;