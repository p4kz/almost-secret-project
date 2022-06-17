import React from "react";

import './styles.css'

export default function Nav () {
  return (
    <>
      <header className="header container">
        <div className="header__wrap">
          <h1 className="header__logo"><a href="http://">p4k-studio</a></h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__link">
                <a href="#start">Home</a>
              </li>
              <li className="nav__link">
                <a href="#about">Sobre</a>
              </li>
              <li className="nav__link">
                <a href="#project">Portifolio</a>
              </li>
              <li className="nav__link">
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}