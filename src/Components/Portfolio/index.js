import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';



export const Portfolio = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);


  return (
    <section className="portfolio section " id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper id="main" navigation pagination={{ dynamicBullets: true, clickable: true }} slidesPerView={1} initialSlide={0} loop /* autoplay={{ delay: 2500 }} */
            onInit={(swiper) => console.log('Inicio -> ', swiper.activeIndex)}
            onSlideChange={(swiper) => { console.log('change -> ', swiper.activeIndex) }}
            onReachEnd={() => console.log('Fim das fotos')}
          >
            {/* 1 */}
            <SwiperSlide key='01' >
              <div className="portfolio__content grid swiper-slide">
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
            </SwiperSlide>

            {/* 2 */}
            <SwiperSlide key='02' >
              <div className="portfolio__content grid swiper-slide">
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
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide key='03' >
              <div className="portfolio__content grid swiper-slide">
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
            </SwiperSlide>

            {/* 4 */}
            <SwiperSlide key='04' >
              <div className="portfolio__content grid swiper-slide">
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
            </SwiperSlide>

          </Swiper>
        </div>

      </div>
    </section>
  );
}

