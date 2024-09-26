import React, { useState } from "react";

import './LogIn.css'
import CardLogIn from "../../components/CardLogIn/CardLogIn";
import vectorLogIn from "../../assets/svg/vectorLogIn.svg"
import Logo from "../../assets/svg/Logo.svg"

function LogIn({}) {
    return (
      <div className='page'>
        <img id="Logo" src={Logo} alt="" />
        <img id="LogIn" src={vectorLogIn} alt="" />
        <div className="Card">
            <CardLogIn/>
        </div>
      </div>

    );
}
  
export default LogIn;