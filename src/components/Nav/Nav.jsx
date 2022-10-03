import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai';
import './nav.scss';

const Nav = () => {
    const [modale, setModal] = useState(false);

    const handleClick = () => {
        setModal(!modale);
    };
    return (
        <div className='nav'>
            {/* Navigation Desktops */}
            <div className='nav__desktop'>
                <nav className='desktop__menu'>
                    <ul className='desktop__list'>
                        <li >
                            <a href='/'>
                                <GoHome />
                            </a>
                        </li>
                        <li className='desktoplist__list-items'>
                            <a href='/photos'>Galerie</a>
                        </li>
                        <li className='desktoplist__list-items'>
                            <a href='/calendrier'>Calendrier</a>
                        </li>
                        <li className='desktoplist__list-items'>
                            <a href='/informations'>Informations</a>
                        </li>
                        <li className='desktoplist__list-items'>
                            <a href='/contacts'>Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Navigation mobiles*/}
            <div className='icon__container'>
                {modale === true ? (
                    <AiFillCloseSquare
                        className='icon__nav'
                        onClick={handleClick}
                    />
                ) : (
                    <AiOutlineMenu
                        className='icon__nav icon__nav--lines'
                        onClick={handleClick}
                    />
                )}
            </div>
            {modale && (
                <div className='nav__mobile' onClick={handleClick}>
                    <div className='modal'>
                        <nav className='mobile__menu'>
                            <ul className='mobile__list'>
                                <li className='mobile__list-items'>
                                    <a href='/'>
                                        <GoHome />
                                    </a>
                                </li>
                                <li className='mobile__list-items'>
                                    <a href='/photos'>Galerie</a>
                                </li>
                                <li className='mobile__list-items'>
                                    <a href='/calendrier'>Calendrier</a>
                                </li>
                                <li className='mobile__list-items'>
                                    <a href='/informations'>Informations</a>
                                </li>
                                <li className='mobile__list-items'>
                                    <a href='/contacts'>Contacts</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
