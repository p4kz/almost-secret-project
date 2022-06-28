import styled from "styled-components";

export const ProjectsBox = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: 1.8rem;
  padding-right: 1.8rem;

  .project__title {
    color: var(--font-white);
    border-bottom: 2px solid var(--border-white);
    font-weight: bolder;
    max-width: 1180px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    padding-bottom: .5rem;
    text-transform: uppercase;
  }

  .project__description {
    color: var(--font-white);
    font-family: var(--font-mono);
  }
`

export const ProjectWrap = styled.div`
  align-content: center;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 3rem auto 0 auto;
  max-width: 890px;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);    
  }

  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ProjectCard = styled.div`
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
  border: 1px solid var(--border-white);
  border-radius: 1rem;
  background: #fff;
  height: 200px;
  min-width: 170px;
  max-width: 400px;
  position: relative;
  transition: all 500ms ease;

  &.project-card__cod {
    background: url(https://i.imgur.com/COp2AGt.png) center no-repeat;
    background-size: cover;
  }

  &.project-card__fork {
    background: url(https://i.imgur.com/Fic5fkI.png) center no-repeat;
    background-size: cover;
  }

  &.project-card__port {
    background: url(https://i.imgur.com/J1Y7HfZ.png) center no-repeat;
    background-size: cover;
  }

  &.project-card__feedget {
    background: url(https://i.imgur.com/hXrWfIs.png) center no-repeat;
    background-size: cover;
  }

  &.project-card__dsmovie {
    background: url(https://i.imgur.com/O41smkA.png) center no-repeat;
    background-size: cover;
  }    

  .project-card__info--box {
    color: var(--font-white);
    background: #000000ba;
    border-radius: 1rem 1rem 0 0;
    padding: .5rem;
    text-align: center;
  }
  
  .project-card__name {
    font-family: var(--font-mono);
  }

  .project-card__description {
    font-size: 1.3rem;
  }

  .project-card__buttons--box {
    align-items: center;
    bottom: 15px;
    display: flex;
    left: 0;
    right: 0;
    position: absolute;
  }

  .btn-card {
    border-radius: 1rem;
    padding: 1rem;
    opacity: .95;
    text-align: center;
    transition: all 300ms ease-in-out;
  } 

  .btn-card:hover {
    opacity: 1;
    transform: scale(1.03);
  }

  .btn-card:active {
    background: var(--green);
    border: 1px solid #000;
    color: #000;
  }
  
  .project-card__button--demo {
    color: var(--font-white);
    background-color: black;
    margin: 0 .5rem 0 .5rem;
    width: 50%;
  }

  .project-card__button--code {
    color: var(--font-black);
    background: var(--white);
    border: 1px solid var(--border-black);
    margin: 0 .5rem 0 .5rem;
    width: 50%;
  }

  .project-card__comming {
    margin: 20% auto;
    text-align: center;
    font-weight: bolder;
    font-family: var(--font-mono);

  }

  &:hover {
    box-shadow: rgba(55, 255, 255, 0.34) 0px 0px 15px;

    .project-card__name {
      transform: scale(1.05) translateZ(20px);
      transition: 300ms;
      text-shadow: rgba(55, 255, 255, 0.75) 0px 0px 15px;
    }
  }

  @media screen and (max-width: 410px) {
    min-width: 299px;
  }
`
