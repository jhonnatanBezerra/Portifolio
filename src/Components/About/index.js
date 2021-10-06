import React from 'react';
import './styles.css';

import { BiDownload } from 'react-icons/bi';
import Me from '../../Assets/imagens/me.png'

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img className="about__img" src={Me} alt="" />
        <div className="about__data">
          <p className="about__description">Web developer, with extensive
            knowledge and years of experience, working in web technologies
            and Ui / Ux design, delivering quality work
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <p className="about__info-name">Years</p>
              <p className="about__info-name">experience </p>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <p className="about__info-name">Completed</p>
              <p className="about__info-name">project</p>
            </div>

            <div>
              <span className="about__info-title">05+</span>
              <p className="about__info-name">Companies</p>
              <p className="about__info-name">worked </p>
            </div>
          </div>
          <div className="about__buttons">
            <a href="" className="button button--flex">
              Download CV <BiDownload className="button_icon" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

