import React from "react";

import { NavUl } from "./styles";

export default function Nav({ open }) {
  return (
    <>
      <NavUl open={open}>
        <li className="nav__list">
          <a className="nav__link" href="#" lang="en"> Home </a>
        </li>
        <li className="nav__list">
          <a className="nav__link" href="#about"> Sobre </a>
        </li>
        <li className="nav__list">
          <a className="nav__link" href="#projects"> Portfolio </a>
        </li>
        <li className="nav__list">
          <a className="nav__link" href="#contact"> Contato </a>
        </li>
      </NavUl>    
    </>
  )
}