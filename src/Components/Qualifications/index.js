import React, { useState } from 'react';
import './styles.css';

import { FaUserGraduate } from 'react-icons/fa';
import { BiBriefcaseAlt2, BiCalendar } from 'react-icons/bi';

export const Qualifications = () => {

  const [qualificationList, setQualificationList] = useState(false)

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className={`qualification__button button--flex ${!qualificationList ? 'qualification__active' : ''}`} onClick={() => setQualificationList(!qualificationList)}>
            <FaUserGraduate className="qualification__icon" />
            Education
          </div>

          <div className={`qualification__button button--flex ${qualificationList ? 'qualification__active' : ''}`} onClick={() => setQualificationList(!qualificationList)}>
            <BiBriefcaseAlt2 className="qualification__icon" />
            Work
          </div>
        </div>
        <div className="qualification__sections">

          <div className={`qualification__content ${!qualificationList ? 'qualification__active' : ''}`} data-content id="education" >

            <div className="qualification__data">


              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>



            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>



            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

              <div>
                <h3 className="qualification__title">Master in Ux/Ui</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>



            </div>


          </div>

          <div className={`qualification__content ${qualificationList ? 'qualification__active' : ''}`} data-content id="work">

            <div className="qualification__data">


              <div>
                <h3 className="qualification__title">Software Enginner</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>



            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>



            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Ui Designer</h3>
                <span className="qualification__subtitle">Brazil - University</span>
                <div className="qualification__calendar">
                  <BiCalendar className="" />
                  2018 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

