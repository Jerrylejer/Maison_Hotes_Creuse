import React from 'react';
import { BsFacebook, BsFillInfoCircleFill } from 'react-icons/bs';
import { FaTemperatureHigh } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <div className="logoBox">
      <BsFacebook className="logoBox__items logoBox__items--facebook"/>
      <BsFillInfoCircleFill className="logoBox__items logoBox__items--infos"/>
      <FaTemperatureHigh className="logoBox__items logoBox__items--temp"/>
    </div>
  )
}

export default Footer;