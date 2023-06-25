import React, {Component, useReducer} from 'react';
import { useState } from 'react';
import {fetchAPI, submitAPI}from"./API";
import {link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pic from "./pic.jpg";
import Header from '../header';
import Footer from '../footer';



export function initializeTimes(){
    let date =new Date();
    return fetchAPI(date.getDate());
}

export const reducer=(state,date)=>{
    state=fetchAPI(date.slice(8,10));
    return state;
};

export const hightField=(field,id)=>{
    if (!field){
        document.getElementById(`${id}`).classList.add("highlighted");

    }
    else{
        document.getElementById(`${id}`).classList.remove("highlighted");

    }
}



const fStyle={display:'grid', max_width: '200px', gap: '20px'};
/*
type Props = {
    availableTimes: any, 
    updateTimes:Function,
}
*/
export default function BookingForm(){
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [date,setDate]= useState("");
    const [time,setTime]= useState("");
    const [number,setNumber]= useState("");
    const [occasion,setOccasion]= useState("Birthday");

    const[state,dispatch]=useReducer(reducer,initializeTimes());
   const navigate=useNavigate();



//disable
const disableSubmit=()=>{
    if (document.querySelector(".submit")){
        if (!name || !email || !number || !date || !occasion || !time ){
            document.querySelector(".submit").setAttribute("disabled","");
            document.querySelector('.submit').classList.add("disabled");

        }
        else {
            document.querySelector(".submit").removeAttribute("disabled");
            document.querySelector(".submit").classList.remove("disabled");
        }
    }
}


const handleSubmit =(e)=>{
    e.preventDefault();
    if (name && email && number && date && time && occasion){
        navigate.push("/confirm");
    }
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setNumber("");
    setOccasion("Birthday");
};
        return (
            <div>
           
            <div className="mt-5 d-flex" >
                <img className='pic' src={pic} alt="pic" />
                <form action=""method="post" onSubmit={handleSubmit} style={fStyle} className='form'>
                <label htmlfor="name">Name</label>

                <input 
                type="text"
                 id="name" 
                 placeholder='your Name'
                 Required 
                 value={name} 

                 onChange={(e)=>{
                 setName(e.target.value)
                disableSubmit();
                 hightField(e.target.value,"name");
                 }
                }
                
                 />
                
                
                <label htmlfor="name">Email</label>
                <input type="email" id="email"placeholder='your Email' value={email}  onChange={(e)=>{setName(e.target.value); disableSubmit() ; hightField(e.target.value,"email");}}/>
                <label htmlfor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} Required onChange={(e)=>{setName(e.target.value); disableSubmit(); hightField(e.target.value,"date");}}/>
                <label htmlfor="res-time">Choose time</label>
                <select id="res-time " value={time} Required onChange={(e)=>{setName(e.target.value); disableSubmit(); hightField(e.target.value,"time");}}>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
   <label htmlfor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} Required onChange={(e)=>{setName(e.target.value); disableSubmit() ; hightField(e.target.value,"number");}}/>
   <label htmlfor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e)=>{setName(e.target.value) ;disableSubmit(); hightField(e.target.value,"occasion");}}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input  type="submit" className='submit' value="Make Your reservation"/>;
</form>
            </div>
            
            </div>
        )
    }

