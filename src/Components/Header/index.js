import React from 'react';
import { BiHomeAlt, BiUser, BiFile, BiBriefcaseAlt2, BiImage, BiSend } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { AiOutlineAppstore } from 'react-icons/ai';

import './styles.css';

export const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Jhonnatan</a>

        <div className="nav__menu" id="nav-menu">

          <ul className="nav__list grid">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <BiHomeAlt className="nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <BiUser className="nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <BiFile className="nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BiBriefcaseAlt2 className="nav__icon" />
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <BiImage className="nav__icon" />
                Portfólio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <BiSend className="nav__icon" />
                Contact-me
              </a>
            </li>
          </ul>
          <GrClose className="nav__close" />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <AiOutlineAppstore className="nav__icon" />
          </div>
        </div>

      </nav>
    </header>
  );
}

