import React, { useState } from 'react';
import './styles.css';

import { BsGrid1X2 } from 'react-icons/bs';
import { BiRightArrowAlt, BiCheckCircle, BiPencil } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineUnfoldMore } from 'react-icons/md';

export const Services = () => {

  const [modalUxUi, setModalUxUi] = useState(false);
  const [modalFront, setModalFront] = useState(false);
  const [modalBrand, setModalBrand] = useState(false);




  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">

        {/* UX/UI */}
        <div className="services__content">
          <div>
            <BsGrid1X2 className="services__icon" />
            <h3 className="services__title">
              Ui/Ux
              Designser
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => setModalUxUi(true)}>
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className={`services__modal ${modalUxUi ? 'active-modal' : ''}`}>

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux
                Designser
              </h4>
              <IoMdClose className="services__modal-close" onClick={() => setModalUxUi(false)} />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>

              </ul>
            </div>
          </div>

        </div>

        {/* Front */}
        <div className="services__content">
          <div>
            <MdOutlineUnfoldMore className="services__icon transform" />
            <h3 className="services__title">
              Frontend
              Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => setModalFront(true)}>
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className={`services__modal ${modalFront ? 'active-modal' : ''}`}>

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend
                Developer
              </h4>
              <IoMdClose className="services__modal-close" onClick={() => setModalFront(false)} />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I position your company brand.</p>
                </li>

              </ul>
            </div>
          </div>

        </div>

        {/* Brand */}
        <div className="services__content">
          <div>
            <BiPencil className="services__icon" />
            <h3 className="services__title">
              Branding
              Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button" onClick={() => setModalBrand(true)}>
            View more
            <BiRightArrowAlt className="button__icon" />
          </span>


          <div className={`services__modal ${modalBrand ? 'active-modal' : ''}`}>

            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding
                Designer
              </h4>
              <IoMdClose className="services__modal-close" onClick={() => setModalBrand(false)} />
              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I develop the user interface.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
                  <p>I create ux element interactions.</p>
                </li>

                <li className="services__modal-service">
                  <BiCheckCircle className="services__modal-icon" />
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

