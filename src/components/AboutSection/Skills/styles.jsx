import styled from "styled-components";

export const SkillsBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  min-height: 300px;
  padding: 3rem 0;

  .skills__card--frontend {
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);        
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .skills__card--frontend {
      margin-bottom: 1rem;
    }
  }
`

export const SkillsCard = styled.div`
  border-radius: 1rem;
  border: 2px solid var(--border-white);
  box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);        
  color: var(--font-white);
  font-size: 1.5rem;
  width: 21%;
  min-width: 150px;
  min-height: 288px;
  margin: 0 1rem;
  padding: 2rem;
  text-align: center;

  #tilt {
    background: transparent;
    width: 100% !important;
    box-shadow: none !important;
  }

  #tilt:hover {
    .skills__title {
      transform: scale(1.15) translateZ(20px);
      transition: 300ms;
      text-shadow: rgba(55, 255, 255, 0.75) 0px 0px 15px;
    }

    .skills__subtitle {
      transition: 500ms;
      color: rgba(55, 255, 255, 0.767);
      border-color: rgba(55, 255, 255, 0.733);
    }
  }

  .skills__subtitle, .skills__title {
    font-family: var(--font-mono);
  }
  
  .skills__title {
    font-size: 2rem;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    text-shadow: rgba(255, 255, 255, 0.75) 0px 0px 15px;
  }

  .skills__subtitle {
    color: var(--gray);
    border-top: 1px solid var(--gray);
    font-size: 1.1rem;
    margin: 1rem 0;
    padding-top: .5rem;
    text-align: start;
  }

  @media screen and (max-width: 768px) {
    width: 81%;
    min-height: 100px;
    margin: 1rem;
  }
`
