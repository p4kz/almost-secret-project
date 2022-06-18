import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;

  z-index: 1050;
  
  padding: 1.5rem 1.8rem;

  max-width: 100vw;

  font-family: var(--font-mono);
  text-transform: uppercase;

  color: var(--font-white);
  background: var(--black-alpha);
`

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1140px;
  min-width: 250px;
  margin: auto;
`

export const HeaderLogo = styled.h2`
  font-weight: bolder;
`

export const HeaderNav = styled.nav`
`
