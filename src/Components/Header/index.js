import React, { useEffect, useState } from 'react';
import { BiHomeAlt, BiUser, BiFile, BiBriefcaseAlt2, BiImage, BiSend } from 'react-icons/bi';
import { BsMoon, BsSun } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';

import './styles.css';

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const [changeTheme, setChangeTheme] = useState(false);


  useEffect(() => {
    loadTheme();

    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }

  }, [offset]);

  const handleChangeTheme = () => {
    const darkTheme = 'dark-theme';
    const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';

    if (currentTheme === 'light') {
      document.body.classList.add(darkTheme.toString());
      setChangeTheme(true);
      localStorage.setItem('selected-theme', 'dark')
    }

    if (currentTheme == 'dark') {
      document.body.classList.remove(darkTheme.toString());
      setChangeTheme(false);
      localStorage.setItem('selected-theme', 'light');
    }

  }

  const loadTheme = () => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme === 'dark') {
      setChangeTheme(true);
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light');
      setChangeTheme(false);
    }

  }

  return (
    <header className={`header ${offset >= 80 ? 'scroll-header' : ''}`} id="header">
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
          {changeTheme ?
            <BsSun className="change-theme" onClick={handleChangeTheme} />
            :
            <BsMoon className="change-theme" onClick={handleChangeTheme} />

          }

          <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
            <AiOutlineAppstore />
          </div>
        </div>

      </nav>
    </header>
  );
}

