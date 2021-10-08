import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';

import './styles.css';

export const ContacteMe = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>

          <div className="contact__information">
            <BsTelephone className="contact__icon" />

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle"> +55 (67) 99680-9432</span>
            </div>
          </div>

          <div className="contact__information">
            <FaRegEnvelope className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">jhonny_nav@hotmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <FaMapMarkerAlt className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Brazil - Naviraí-MS</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Name</label>
              <input type="text" className="contact__input" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">Email</label>
              <input type="email" className="contact__input" />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">Project</label>
            <input type="text" className="contact__input" />
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">Message</label>
            <textarea name="" id="" cols="30" rows="7" className="contact__input"></textarea>
          </div>

          <div>
            <a href="#" className="button button--flex">
              Send Message
              <BiSend className="button__icon" />
            </a>
          </div>

        </form>

      </div>
    </section>
  );
}
