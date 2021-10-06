import React from 'react';
import './styles.css';

import { BsGrid1X2 } from 'react-icons/bs';
import { BiRightArrowAlt, BiCheckCircle, BiPencil } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineUnfoldMore } from 'react-icons/md';

export const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <BsGrid1X2 className="services__icon" />
            <h3 className="services__title">
              Ui/Ux
              Designser
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className="services__modal">

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux
                Designser
              </h4>
              <IoMdClose className="services__modal-close" />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I position your company brand.</p>
                </li>

              </ul>
            </div>
          </div>

        </div>


        <div className="services__content">
          <div>
            <MdOutlineUnfoldMore className="services__icon transform" />
            <h3 className="services__title">
              Frontend
              Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className="services__modal">

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend
                Developer
              </h4>
              <IoMdClose className="services__modal-close" />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I position your company brand.</p>
                </li>

              </ul>
            </div>
          </div>

        </div>


        <div className="services__content">
          <div>
            <BiPencil className="services__icon" />
            <h3 className="services__title">
              Branding
              Designser
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className="services__modal">

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding
                Designser
              </h4>
              <IoMdClose className="services__modal-close" />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="" services__modal-icon />
                  <p>I position your company brand.</p>
                </li>

              </ul>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

