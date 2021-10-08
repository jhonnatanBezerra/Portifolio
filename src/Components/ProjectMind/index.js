import React from 'react';
import { BiSend } from 'react-icons/bi';
import Me from '../../Assets/imagens/me.png'
import './styles.css';

export const ProjectMind = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">Contact me now and get a 30% discount on your new project.</p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me
              <BiSend className="button__icon project__icon button__icon" />
            </a>
          </div>
          <img src={Me} alt="image" className="project__img" />
        </div>
      </div>
    </section>
  );
}

