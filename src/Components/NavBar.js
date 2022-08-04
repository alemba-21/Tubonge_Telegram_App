import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react';

import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return(
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "NavLinks active" : "NavLinks"}>
        <li>
          <Link to="Avatar">Profile</Link>
        </li>
        <li>
          <Link to="Contactlist">New Group</Link>
        </li>
        <li>
          <Link to="Contactalist">Contacts</Link>
        </li>
        <li>
          <Link to="Dialpad">Calls</Link>
        </li>
        <li>
          <Link to="Settings">Settings</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:'white'}}/> ) : (<FaBars size={20} style={{color:'white'}}/>)}
      </div>
    </div>
  )
}

export default Navbar