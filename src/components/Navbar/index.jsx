import React, { useState } from "react";

import {
  FaTimes,
  FaBars,
} from 'react-icons/fa'

import { IconContext } from 'react-icons/lib'

import { 
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,

} from './styles'

// import Button from '../../styles/global'

export default function Navbar() {
  const [click, setClick] = useState(false)
  // burguer 
  const handleClick = () => setClick(!click)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            P4K-STUDIO
          </NavLogo>

          <MobileIcon
            onClick={handleClick}
          >
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>Sobre</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/skills'>Skills</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/hobbies'>Hobbies</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/training'>Formacão</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='/projects'>Projetos</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}