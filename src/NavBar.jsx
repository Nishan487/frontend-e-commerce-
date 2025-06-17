import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { CiDark } from "react-icons/ci";

const NavBar = (props) => {
  
  return (
    <div className='navbar'>
        <div className='logo'>
           <img src="https://www.pngkey.com/png/detail/251-2510486_logo-ecom-e-commerce-logo.png" alt="Logo-ecom - E Commerce Logo@pngkey.com" className='logo'></img>
           </div>
        <ul>
            <li>
                <NavLink to="/" className="navbar-link home">Home</NavLink>
            </li>
             <li>
                <NavLink to="/about" className="navbar-link about">About</NavLink>
            </li>
             <li>
                <NavLink to="/contact" className="navbar-link contact">Contact</NavLink>
            </li>
             <li>
                <NavLink to="/product" className="navbar-link home">Product</NavLink>
            </li>
             <li>
                <NavLink to="/cart" className="navbar-link cart">Cart</NavLink>
            </li>
        </ul>
        <div className='shoping'>
                <FaCartShopping className='shop-icon'/><span className='power'>0</span>
                </div>
                  {/* <button>
                 <img src='menu.png' alt='' className='toggle' />
                </button> */}
                <div className='shopings' onClick={props.toggleMode}>
                    <CiDark className='icon' onClick={props.toggleMode} img={props.img}/>
                </div>
        </div>
        
  )
}

export default NavBar;