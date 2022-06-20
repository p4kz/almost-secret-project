import styled from "styled-components";
import aboutImage from '../../assets/img/about-image.jpg'

export const AboutBox = styled.section`
  align-items: center;
  background: var(--black);
  display: flex;
  flex-direction: column;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  min-width: 290px;
  
  .about__title {
    color: var(--font-white);
    font-weight: bolder;
    border-bottom: 2px solid #fff;
    max-width: 1180px;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    text-transform: uppercase;
  }
`

export const AboutWrap = styled.div`
  margin: auto;
  max-width: 1140px;
  min-width: 250px;
  padding: 2rem 0 ;
`

export const AboutInfo = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  padding: 2rem 0 2rem 0;
  justify-content: center;
  width: 100%;

  .about__image {
    align-items: center;
    display: flex;
    padding: 1rem 3rem;
    
    div {
      background: url(${aboutImage}) center no-repeat;
      background-size: cover;
      border: 1px solid #333;
      box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);        
      border-radius: 50%;
      height: 250px;
      width: 250px;
    }
  }

  .about__text {
    color: var(--font-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;
    padding: 1rem 3rem;


    h1, h2 , h3 {
      font-family: var(--font-mono);
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      color: var(--gray-white);
      font-size: 2.5rem;
    }

    h3 {
      color: var(--gray);
      font-size: 2rem;
    }

    .about__text--email {
      border-bottom: 1px solid var(--font-white);
      font-size: 1.3rem;
      margin: 1rem 0;
      padding-bottom: 1.4rem;
    }

    p {
      font-size: 1.6rem;
      text-align: justify;
    }
  }

  @media screen and (max-width: 768px) {  
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    #about__name {
      margin-bottom: 1rem;
    }
  }
`