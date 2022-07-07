import styled from "styled-components";

import roboticaImage from "../../../assets/img/robotica-image.jpg"

export const HobbiesBox = styled.div`
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 278px;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin: auto;
    min-width: 285px;
  }

`

export const HobbiesCard = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  li {
    align-items: center;
    text-align: center;
    margin: .5rem;
    border: 1px solid #fff;
    padding: 1rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    color: #fff;
  }
`

export const ExperienceCard = styled.ul`
  margin: auto 0 auto 0;
  border-radius: 1rem;
  transition: all 500ms ease-in-out;
  
  li {
    align-items: center;
    border: 1px solid #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    color: var(--font-white);
  }
  
  .experience--robotica {
    background: url(${ roboticaImage }) no-repeat top;
    background-size: cover;
  }
  
  .experience__box {
    padding: 1rem;
    border-radius: 1rem;
    background-color: #121214dd;
  }

  .experience__title {
    font-family: var(--font-mono);
    text-transform: uppercase;
    padding: .5rem;
  }

  .experience__date {
    border-bottom: 1px solid ;
    font-size: 1.2rem;
    margin-bottom: .5rem;
    padding: .5rem;
  }

  .experience__text {
    text-align: justify;
    font-size: 1.5rem;
  }

  &:hover {
    box-shadow: rgba(55, 255, 255, 0.34) 0px 0px 15px;

    .experience__title {
      transform: scale(1.15) translateZ(20px);
      transition: 300ms;
      text-shadow: rgba(55, 255, 255, 0.75) 0px 0px 15px;
    }

    .experience__date {
      border-color: rgba(55, 255, 255, 0.733);
    }
  }
`