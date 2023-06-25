import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import BookingPage from "./components/BookingPage";


const Home1=() => {
return (
  
  <div className='secone'>
<img  src={require("./rest.jpg")} className='rest' alt="rest"></img>
  <h1 className="move">Little Lemon  <br/>Chicago</h1>
  
  <p className="movee">We are a family owned <br/> Mediterranean restaurant, focused<br/>  on traditional recipes served with <br/>a modern twist.</p>
  <button className="btn">
   
  <Link to={'BookingPage'}>Reserve a Table</Link>
    </button>
    

  
  </div>







)

}

export default Home1;