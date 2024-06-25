import React from 'react';
import {FaGithub, FaTwitter, FaFacebook} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <p>
      <h2>Visit us </h2>
      <h3>Triangle Chinese Language School<br></br>400 E Moore St, Apex, NC 27502</h3>

      </p>

      <p>
      <h2>Contact us </h2>
      <h3>909-387-2181 (Main office) <br></br>919-626-4410 (Fax) </h3>
      </p>

      <div className='footerLinks'>
        <a href="https://www.facebook.com/racl1995/" target='_blank'><FaFacebook/></a>
        <a href="https://x.com/raclsocial?lang=en" target='_blank'><FaTwitter/></a>
        <a href='mailTo:racl@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer