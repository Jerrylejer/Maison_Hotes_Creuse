import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaTemperatureHigh } from 'react-icons/fa';
import { ImSphere } from 'react-icons/im';
import './footer.scss';

const Footer = () => {
    return (
        <div className='logoBox'>
            <BsFacebook className='logoBox__items logoBox__items--facebook' />
            <a href='/plan'>
            <ImSphere className='logoBox__items logoBox__items--infos' />
            </a>
            <a href='/meteo'>
                <FaTemperatureHigh className='logoBox__items logoBox__items--temp' />
            </a>
        </div>
    );
};

export default Footer;
