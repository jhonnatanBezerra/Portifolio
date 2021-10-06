import React, { useState } from 'react';
import './styles.css';
import { RiBracesLine } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';
import { IoServerOutline } from 'react-icons/io5'
import { HiOutlineColorSwatch } from 'react-icons/hi';

export const Skills = () => {

  const [frontSkills, setFrontSkills] = useState(true);
  const [backSkills, setBackSkills] = useState(false);
  const [designSkills, setDesignSkills] = useState(false)

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>

          <div className={`skills__content ${frontSkills ? 'skills__open' : 'skills__close'}`} >
            <div className="skills__header" onClick={() => setFrontSkills(!frontSkills)}>
              <RiBracesLine className="skills__icon" />

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>

              <FaAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>


              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>


            </div>

          </div>

          <div className={`skills__content ${backSkills ? 'skills__open' : 'skills__close'}`}>

            <div className="skills__header" onClick={() => setBackSkills(!backSkills)}>
              <IoServerOutline className="skills__icon" />
              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>
              <FaAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__firebase"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div>

          <div className={`skills__content ${designSkills ? 'skills__open' : 'skills__close'}`}>

            <div className="skills__header" onClick={() => setDesignSkills(!designSkills)}>
              <HiOutlineColorSwatch className="skills__icon" />
              <div >
                <h1 className="skills__title">Designer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>
              <FaAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Figma</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__figma"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Sketch</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sketch"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Photoshop</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__photoshop"></span>
                </div>
              </div>


            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

