import './App.css';
import App from './App';
import BookingForm from './components/BookingForm';
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



const  Nav= () => {
return (

 <nav> 
   
  <ul className="hover-effect">
     <li className="li"><img src={require("./Logo.png")} className='logo' alt="logo"></img></li>
      <li className='li'>
      <NavLink to="/"> Home</NavLink>
     </li>
      <li className="li">
       
        <NavLink to='/About'> About</NavLink>

        </li>

        <li className="li">
        <NavLink to='/Menu'> Menu</NavLink>
        </li>

        <li className="li">
        <NavLink to='/BookingForm'> BookingForm</NavLink>

        </li>
<li className="li">
        <NavLink to="/Order"> Order Online</NavLink>
        </li>

        <li className="li">
        <NavLink to="/Login"> Login</NavLink>
        </li>
        
    </ul>
            </nav>
  
          

)
}

export default  Nav;         