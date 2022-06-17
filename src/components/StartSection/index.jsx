import React from "react";
import ProfileImage from '../../assets/img/profile-test.jpg'

import { FaGithubSquare, FaLinkedin, FaArrowAltCircleDown } from "react-icons/fa"
import './styles.css'

export default function StartSection () {
  return (
    <>
      <section className="start container">
        <div className="start__wrap">

          <div className="start__info">
            <h2 className="start__title">
              Olá, meu nome é Eric e eu construo websites
            </h2>
            <p className="start__text">
              Sou um entusiasta de tecnologia e no momento estou estudando no Oracle Next Education para alcançar minha formação Full-Stack.
            </p>
            <ul className="start__list">
              <li className="start__links">
                <a href="http://"><FaGithubSquare className="start__icon"/> Github</a>
              </li>

              <li className="start__links">
                <a href="http://"><FaLinkedin className="start__icon"/> Linkedin</a>
              </li>

              <li className="start__links">
                <a href="http://"><FaArrowAltCircleDown className="start__icon"/>Curriculo</a>
              </li>

              <li className="start__links--projetos">
                <a href="http://">Veja meus projetos</a>
              </li>
            </ul>
          </div>

          <div className="start__image">
            <img src={ProfileImage} alt="" />
          </div>

        </div>        
      </section>
    </>
  )
}