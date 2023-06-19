import React, {Component} from 'react';
import { useState } from 'react';
import {link} from "react-router-dom";

const fStyle={display:'grid', max_width: '200px', gap: '20px'};

type Props = {
    availableTimes: any, 
    updateTimes:Function,
}

export default function BookingForm(props:Props){
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [date,setDate]= useState("");
    const [time,setTime]= useState("");
    const [number,setNumber]= useState("");
    const [occasion,setOccasion]= useState("");


        return (
            <div className="mt-5 d-flex" >
                <form style={fStyle} className='"form'>
                <label htmlfor="name">Name</label>
                <input type="text" id="name" placeholder='your Name'Required value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlfor="name">Email</label>
                <input type="email" id="email"placeholder='your Email' value={email} Required onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlfor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} Required onChange={(e)=> setDate(e.target.value)}/>
                <label htmlfor="res-time">Choose time</label>
                <select id="res-time " value={time} Required onChange={(e)=>setTime(e.target.value)}>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
   <label htmlfor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} Required onChange={(e)=>setNumber(e.target.value)}/>
   <label htmlfor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>;
</form>
            </div>
        )
    }

