import styled from 'styled-components'
import profileImage from "../../assets/img/profile-test.jpg"
import profileImageMobile from "../../assets/img/profile-street.png"

export const HomeBox = styled.section`
  display: flex;
  
  min-height: 100vh;

  padding-left: 1.8rem;
  padding-right: 1.8rem;
  
  color: var(--font-black);
`

export const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid var(--border-black);
  border-bottom: 2px solid var(--border-black);
  
  padding: 30px 2rem 30px 2rem;
  
  width: 100%;
  max-width: 1140px;
  min-width: 250px;

  margin: auto;
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 50%; 
  height: 460px;
  min-height: auto;
  
  h2 {
    font-size: 3rem;
    font-family: var(--font-mono);
    font-weight: bolder;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.9rem;
    text-align: justify;
  }

  .home__text--info {
    font-size: 1.2rem;
    font-weight: bolder;
    color: var(--gray);
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;

    h2 {
      text-align: center;
      font-size: 2.5rem;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`

export const HomeBoxImg = styled.div`
  height: 450px;
  width: 30%;
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 150px;
    margin: 0;
    width: 400px;
  }
  
`

export const HomeImg = styled.div`
  height: 100%;
  clip-path: polygon(25% 1%, 99% 1%, 75% 99%, 1% 99%);
  /* border: 7px solid var(--border-black); */
  
  background: url(${profileImage}) center no-repeat;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    border: 0;
    background-position: 50% 10%;

    
    clip-path: circle(25% at 50% 50%);
  }
`