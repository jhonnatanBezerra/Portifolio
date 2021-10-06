import React from 'react';
import './styles.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiSend, BiMouse, BiDownArrowAlt } from 'react-icons/bi'

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">

            <a href="#" /* target="_blank" */ className="home__social-icon">
              <FaLinkedin />
            </a>

            <a href="#" /* target="_blank" */ className="home__social-icon">
              <FaGithub />
            </a>

            <a href="#" /* target="_blank" */ className="home__social-icon">
              <FaLinkedin />
            </a>
          </div>
          <div className="home__img">

            <svg className="home__blob" viewBox="0 0 200 187" >
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className="home__blob-img" x='12' y='18' href="https://avatars.githubusercontent.com/u/57879592?v=4" />
              </g>
            </svg>

          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'am Jhonnatan</h1>
            <h3 className="home__subtitle">Frontend developer</h3>
            <p className="home__description">Higth level experience in web design and
              development knowledge, producing quality work.</p>
            <a href="#contact" className="button button--flex">
              Contact Me
              <BiSend className="button__icon" />
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <BiMouse className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <BiDownArrowAlt className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>

  );
}

