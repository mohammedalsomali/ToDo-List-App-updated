import React from "react";

export default function Navb() {
  return (
    <nav className="nav">
      <ul>
        <li className="navItem">
          {" "}
          <a href="#"> Calender </a>{" "}
        </li>
        <li className="navItem">
          {" "}
          <a href="#"> Todo List </a>{" "}
        </li>
        <li className="navItem">
          {" "}
          <a href="#"> Trash</a>{" "}
        </li>
        <li className="navItem">
          {" "}
          <a href="#"> Customize </a>{" "}
        </li>
      </ul>
      <form>
        <label>
          
          <input type="text" placeholder="Enter your name:"/>
        </label>
      </form>
    </nav>
  );
}
