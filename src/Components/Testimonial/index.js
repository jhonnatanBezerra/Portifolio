import React from 'react';
import testimonial1 from '../../Assets/imagens/testimonial1.jpg';
import testimonial2 from '../../Assets/imagens/testimonial2.jpg';
import testimonial3 from '../../Assets/imagens/testimonial3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { BsStar } from 'react-icons/bs';

import './styles.css';

export const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper id="main" navigation pagination={{ dynamicBullets: true, clickable: true }} slidesPerView={1} initialSlide={0} loop /* autoplay={{ delay: 2500 }} */
            onInit={(swiper) => console.log('Inicio -> ', swiper.activeIndex)}
            onSlideChange={(swiper) => { console.log('change -> ', swiper.activeIndex) }}
            onReachEnd={() => console.log('Fim das fotos')} >

            {/* 01 */}
            <SwiperSlide key='01' style={{ padding: '0 3rem' }} >
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={testimonial1} alt="testimonial" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Sara Smith</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project eith all the possible quality
                  and attention and support 24 hours a day.
                </p>

              </div>
            </SwiperSlide>

            <SwiperSlide key='02' style={{ padding: '0 3rem' }}>
              {/* 02 */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={testimonial2} alt="testimonial" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Matt Robinson</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project eith all the possible quality
                  and attention and support 24 hours a day.
                </p>

              </div>
            </SwiperSlide>

            <SwiperSlide key='03' style={{ padding: '0 3rem' }}>
              {/* 03 */}
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src={testimonial3} alt="testimonial" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Raul Harris</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                    <BsStar className="testimonial__icon-star" />
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project eith all the possible quality
                  and attention and support 24 hours a day.
                </p>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

