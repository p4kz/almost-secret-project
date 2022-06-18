import React from "react";

import { 
  NavLi,
  NavUl 
} from "./styles";

export default function Nav ({ open }) {
  return (
    <>
      <NavUl open={open}>
        <NavLi>
          Home
        </NavLi>
        <NavLi>
          Sobre
        </NavLi>
        <NavLi>
          Portfolio
        </NavLi>
        <NavLi>
          Contato
        </NavLi>
      </NavUl>    
    </>
  )
}