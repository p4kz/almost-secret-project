import styled from "styled-components";

export const AcademicBox = styled.div`
  width: 40%;
  min-width: 360px;
  padding: 2rem 0 2rem 0;
  margin-left: 3rem;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin: auto;
    min-width: 285px;
  }
`

export const AcademicCard = styled.div`
  align-items: center;
  border-radius: 1rem;
  border: 1px solid var(--border-white);
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);        
  color: var(--font-white); 
  display: flex;
  flex-direction: row;
  padding: .5rem 2rem .5rem 2rem;
  font-size: 1.5rem;
  min-height: 86px;
  margin: 1.5rem 0;

  .academic__image--one {
    background: url('https://i.imgur.com/w0NvalO.png') center no-repeat;
    background-size: 100%;
    width: 100px;
    min-width: 75px;
    height: 60px;
  }

  .academic__image--udemy {
    background: url('https://i.imgur.com/HWpg7PP.png') center no-repeat;
    background-size: 90%;
    width: 100px;
    min-width: 75px;
    height: 60px;
  }

  .academic__image--pronatec {
    background: url('https://i.imgur.com/eRuwrpV.png') center no-repeat;
    background-size: 90%;
    width: 100px;
    min-width: 75px;
    height: 60px;
  }

  .academic__info {
    margin-left: 2rem;
  }

  .academic__name {
    font-family: var(--font-mono);
  }

  .academic__date {
    color: #665f5a;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 769px) {
    margin: 1.5rem 0;  
  }
`
