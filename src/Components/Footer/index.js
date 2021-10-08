import React from 'react';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

import './styles.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Jhonnatan</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">Services</a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>

            <li>
              <a href="#contact" className="footer__link">Contactme</a>
            </li>

          </ul>

          <div className="footer__socials">
            <a href="https://www.facebook.com/" target="_blank" className="footer__social">
              <FaFacebookSquare />
            </a>

            <a href="https://www.instagram.com/" target="_blank" className="footer__social">
              <FaInstagram />
            </a>

            <a href="https://twitter.com/" target="_blank" className="footer__social">
              <FaTwitter />
            </a>
          </div>

          <p className="footer__copy">&#169; Bedimcode. All right reserved</p>

        </div>
      </div>
    </footer>
  );
}

