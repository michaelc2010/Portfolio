import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";
import logo from '../images/tcls_logo1.png';

import './Navbar.css';
import Dropdown from './Dropdown';

// import { Dropdown, DropdownItem } from "flowbite-react";

const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
        {/* <h1 title='Reload' onClick={()=>window.location.reload(true)} className='Logo'>TCLS</h1> */}
        <img src ={logo} width={200} onClick={()=>window.location.reload(true)} className='Logo'/>
        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/"> Home </Link></li>
            <li onClick={hideMenu}><Link to="/About"> Our School </Link></li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className='nav-links' onClick={closeMobileMenu}> Language Classes <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className='nav-links' onClick={closeMobileMenu}> Activity Classes <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className='nav-links' onClick={closeMobileMenu}> Registration <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className='nav-links' onClick={closeMobileMenu}> Student <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown />}
            </li>
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link className='nav-links' onClick={closeMobileMenu}> PTA <i className='fas fa-caret-down' /></Link>
                {dropdown && <Dropdown />}
            </li>
            <li onClick={hideMenu}><Link to="/Registration"> Volunteering & Sponsors </Link></li>
        </ul>
        
    </nav>
  )
}

export default Nav