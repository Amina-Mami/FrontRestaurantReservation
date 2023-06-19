import React from "react";
import { ReactDOM } from "react-dom";
import Header from "../header";
import Footer from "../footer";



const ConfirmedBooking = () => {
 return(

        <div>
        
            <h1>"The booking has been confirmed"</h1><br/>
        
        <link className="redirection-button" to="/BookingPage">Order Online</link>
       
        </div>
        
    )
}


export default ConfirmedBooking;
