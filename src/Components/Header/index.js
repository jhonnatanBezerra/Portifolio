import React, { useState } from 'react';
import { BiHomeAlt, BiUser, BiFile, BiBriefcaseAlt2, BiImage, BiSend } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';

import './styles.css';

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Jhonnatan</a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">

          <ul className="nav__list grid">

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#home" className="nav__link">
                <BiHomeAlt className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#about" className="nav__link">
                <BiUser className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#skills" className="nav__link">
                <BiFile className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#services" className="nav__link">
                <BiBriefcaseAlt2 className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#portfolio" className="nav__link">
                <BiImage className="nav__icon" />
                Portfólio
              </a>
            </li>

            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#contact" className="nav__link">
                <BiSend className="nav__icon" />
                Contact-me
              </a>
            </li>
          </ul>
          <IoMdClose className="nav__close" id="nav-close" onClick={() => setShowMenu(false)} />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
            <AiOutlineAppstore />
          </div>
        </div>

      </nav>
    </header>
  );
}

