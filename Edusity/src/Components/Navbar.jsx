import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky,setStickey]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setStickey(true):setStickey(false);
    })
  },[]);
  
  const [menu,setMenu]=useState(false);
  const toggleMenu=()=>{
    menu?setMenu(false):setMenu(true);
  }
  return (
   <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="Logo" className='logo' />
        <ul className={menu ? '' : 'hide-icon'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon}  className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar
