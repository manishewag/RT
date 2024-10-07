/* eslint-disable no-unused-vars */
import React from "react";

function Navbar (){
    return<>
      <nav className="navbar">

         <li className="nav-link">
            <a href="/all" className="underline">All</a>
         </li>

         <li className="nav-link">
            <a href="/FullStackDevelopment" className="underline">FULL STACK DEVELOPMENT</a>
         </li>

         <li className="nav-link">
            <a href="/DataScience" className="underline">DATA SCIENCE</a>
         </li>

         <li className="nav-link">
            <a href="/CyberSecurity" className="underline">CYBER SECURITY</a>
         </li>

         <li className="nav-link">
            <a href="/Career" className="underline">CAREER</a>
         </li>

      </nav>
    </>

}

export default Navbar
