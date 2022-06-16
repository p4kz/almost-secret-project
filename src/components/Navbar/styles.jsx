
import styled from "styled-components";

import { Container } from '../../styles/global'

import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  height: 80px;
  z-index: 999;
  font-size: 1.2rem;
  background: var(--black);
`

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container} 
`

export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--mono);
  font-size: 1.5rem;
  color: var(--font-secundary);
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    top: 11px;
    right: 0; 
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #121214;
  }
`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent; 

  &:hover {
    border-bottom: 2px solid var(--roxo);
  }

  @media screen and (max-width: 820px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  text-transform: uppercase;
  font-family: var(--mono);
  color: #fff;

  @media screen and (max-width: 820px) {
    text-align: center;
  align-items: center;

    padding: 2rem 0 0 0;
    width: 100%;
    display: table;

    &:hover {
      color: var(--roxo);
      transition: all 0.3s ease;
    }
  }
`