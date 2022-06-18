import styled from "styled-components";

export const MidiaBox = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto 0 2rem 0;
  min-height: 130px;
  
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    min-height: 110px;

  }
`

export const MidiaItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  height: 52px;
  
  &:nth-child(1) {
    width: 33%;
  }

  &:nth-child(2) {
    width: 39%;
  }

  &:nth-child(3) {
    width: 40%;
  }

  &:nth-child(4) {
    margin-right: 0;
  }
  
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    min-width: 66px;

    color: var(--blue);
    
    svg {
      margin-right: .5rem;
    }

  }
  
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;

    &:nth-child(1) {
      width: 25%;
    }

    &:nth-child(2) {
      width: 29%;
    }

    &:nth-child(3) {
      width: 29%;
      margin-right: 0;
    }
  }

  @media screen and (max-width: 1066px) {
    flex-wrap: nowrap;

    a {
      display: flex;
      flex-direction: column;     
    }
  }

  @media screen and (max-width: 396px) {
    flex-wrap: nowrap;

    a {
      display: flex;
      flex-direction: column;     
    }
  }
`

export const MidiaItemButtom = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100%;
  min-width: 122px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  
    padding: 5px;
    border-radius: .8rem;
    font-weight: 100;
    text-transform: uppercase;
    background: var(--black);
    color: var(--font-white);
  }

  @media screen and (max-width: 768px) {
    a {
      width: 100%;
    }
  }
`