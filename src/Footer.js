import React from "react";
import "./Footer.css";

import { AiFillYoutube,AiOutlineTwitter,AiFillInstagram } from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="footer_ctr">
        <ul id="ul">
          <li>About us</li>
          <li>Contact us</li>
          <li>Mobile app</li>
          <li>Careers</li>
        </ul>
        <div className="right_bx">
          <ul id="icons">
           
            <AiFillYoutube size={'2rem'} color='red'/>
            <BsFacebook size={'2rem'} color='blue'/>
            <AiOutlineTwitter size={'2rem'} color='#47B5FF'/>
            <AiFillInstagram size={'2rem'} color='#FF74B1'/>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
