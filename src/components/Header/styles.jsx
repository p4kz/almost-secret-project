import styled from "styled-components";

export const HeaderBox = styled.header`
  background: var(--bg-secudary);
  color: var(--font-white);
  font-family: var(--font-mono);
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  padding: 1.5rem 1.8rem;
  text-transform: uppercase;
  z-index: 1050;
  
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
`

export const HeaderWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  min-width: 250px;
  margin: auto;
  width: 100%;
  height: 27px;

  .header__logo {
    font-weight: bolder;
    color: var(--bg-primary);
  }
`
