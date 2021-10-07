import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

import './styles.css';

export const Portfolio = () => {
  return (
    <section className="portfolio section " id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container">
        <div>
          {/* 1 */}
          <div className="portfolio__content grid">
            <img src="https://blog.rocketseat.com.br/content/images/2020/06/ecoleta.png" alt="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Ecoleta</h3>
              <p className="portfolio__description">Website adaptable to all devices,
                with ui components and animated interactions.</p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo <BiRightArrowAlt className=" button__icon" />
              </a>

            </div>
          </div>

          {/* 2 */}
          <div className="portfolio__content grid">
            <img src="https://felipefabricio31.github.io/portfolio/img/thumb-5.jpg" alt="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Be The Hero</h3>
              <p className="portfolio__description">Website adaptable to all devices,
                with ui components and animated interactions.</p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo <BiRightArrowAlt className=" button__icon" />
              </a>

            </div>
          </div>

          {/* 3 */}
          <div className="portfolio__content grid">
            <img src="https://raw.githubusercontent.com/rocketseat-education/semana-omnistack-10/master/.github/devradar.png" alt="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Dev Radar</h3>
              <p className="portfolio__description">Website adaptable to all devices,
                with ui components and animated interactions.</p>
              <a href="#" className="button button--flex button--small portfolio__button">
                Demo <BiRightArrowAlt className=" button__icon" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

