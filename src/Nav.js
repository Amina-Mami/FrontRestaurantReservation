import './App.css';
import App from './App';
import BookingForm from './components/BookingForm';
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const  Nav= () => {
return (

 <nav> 
   
  <ul className="hover-effect">
     <li className="li"><img src={require("./Logo.png")} className='logo' alt="logo"></img></li>
      <li className='li'>
      <Link to={App}> Home</Link>
     </li>
      <li className="li">
        <Link to='/App'> About</Link>
        </li>

        <li className="li">
        <Link to="/App"> Menu</Link>
        </li>

        <li className="li">
        <Link to='/components/BookingForm'> BookingForm</Link>
        </li>
<li className="li">
        <Link to="/App"> Order Online</Link>
        </li>

        <li className="li">
        <Link to="/App"> Login</Link>
        </li>
        
    </ul>
            </nav>
   
            


)
}

export default  Nav;         