import React from "react";

export default function Navb() {
  return (
    <nav className="nav">
      <form>
        <label>
        <input type="search"></input>
        <button type="submit"></button>
          
        </label>
      </form>
      <ul>
        
        <li className="navItem">
          
          <a href="#"> Calender </a>
        </li>
        <li className="navItem">
        
          <a href="#"> Todo List </a>
        </li>
        <li className="navItem">
          
          <a href="#"> Trash</a>
        </li>
        <li className="navItem">
         
          <a href="#"> Customize </a>
        </li>
      </ul>
      
    </nav>
  );
}
