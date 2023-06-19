import { Link } from 'react-router-dom';
import './App.css';

import React from 'react'
function Footer() {
  return (
    <footer>
      <section className='Footerimg'>
       <img
            src={require("./Logo.png")}
            alt="logo"
            className='logoo'
          ></img>
        
        </section>
      
<section className='FooterContact'>
       
          <h1>Contact Us</h1>
          <article>
            <p>125f,vrbgb,gvrg</p>
            <p>02451484547855</p>
            <p>contac@littlelemon.com</p>
          </article>
          </section>

          <section className='FooterSocial'>
            <h1>Social Media</h1>
          <article>
            <p><a href="faceboo.com">Facebook</a></p>
            <p><a href="instagram.com">Instagram</a></p>
            <p><a href='twitter.com'>Twitter</a></p>
         
          </article>
          </section>
          
      
    </footer>



  );
}
export default Footer;